/**
 * Automatic Butterfly Template Allocation Engine
 * 
 * Shared allocation backend logic for Butterfly Box product uploads.
 * Handles automatic template matching, Blue/Red slot assignment,
 * concurrency locking, order linking, and print generation triggering.
 */

export type TemplateSide = 'BLUE' | 'RED';
export type TemplateStatus = 'WAITING_FOR_SECOND_CUSTOMER' | 'READY_FOR_PRINT';

export interface Order {
  id: string;
  customerId: string;
  productId: string;
  uploadedPhotos: string[];
  templateId?: string | null;
  templateSide?: TemplateSide | null;
  linkedOrderId?: string | null;
  createdAt: Date;
}

export interface ButterflyTemplate {
  id: string;
  templateNumber: string;
  productId: string;
  status: TemplateStatus;
  blueOrderId: string | null;
  redOrderId: string | null;
  blueCustomerId: string | null;
  redCustomerId: string | null;
  bluePhotos: string[];
  redPhotos: string[];
  pdfGenerated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomerUploadPayload {
  orderId: string;
  customerId: string;
  productId: string;
  uploadedPhotos: string[];
}

export interface AllocationResult {
  order: Order;
  template: ButterflyTemplate;
  action: 'ASSIGNED_TO_WAITING_BLUE' | 'ASSIGNED_TO_WAITING_RED' | 'CREATED_NEW_TEMPLATE';
  printReady: boolean;
}

/**
 * In-Memory Transactional Database Store with Mutex Concurrency Protection
 */
class ButterflyStore {
  private templates: Map<string, ButterflyTemplate> = new Map();
  private orders: Map<string, Order> = new Map();
  private templateCounter: number = 0;
  private isProcessingLock: boolean = false;
  private lockQueue: Array<() => void> = [];

  /**
   * Acquire atomic transaction lock for concurrency safety
   */
  private async acquireLock(): Promise<() => void> {
    return new Promise((resolve) => {
      const release = () => {
        if (this.lockQueue.length > 0) {
          const next = this.lockQueue.shift();
          if (next) next();
        } else {
          this.isProcessingLock = false;
        }
      };

      if (!this.isProcessingLock) {
        this.isProcessingLock = true;
        resolve(release);
      } else {
        this.lockQueue.push(() => resolve(release));
      }
    });
  }

  /**
   * Clear all store data (useful for testing)
   */
  public resetStore(): void {
    this.templates.clear();
    this.orders.clear();
    this.templateCounter = 0;
    this.isProcessingLock = false;
    this.lockQueue = [];
  }

  /**
   * Register or fetch an order
   */
  public saveOrder(order: Order): Order {
    this.orders.set(order.id, order);
    return order;
  }

  public getOrder(orderId: string): Order | undefined {
    return this.orders.get(orderId);
  }

  public getAllOrders(): Order[] {
    return Array.from(this.orders.values());
  }

  public getTemplate(templateId: string): ButterflyTemplate | undefined {
    return this.templates.get(templateId);
  }

  public getAllTemplates(): ButterflyTemplate[] {
    return Array.from(this.templates.values());
  }

  /**
   * Core Transactional Butterfly Allocation Engine
   */
  public async processButterflyAllocation(payload: CustomerUploadPayload): Promise<AllocationResult> {
    const releaseLock = await this.acquireLock();

    try {
      // Create initial order record if not registered
      let order = this.orders.get(payload.orderId) || {
        id: payload.orderId,
        customerId: payload.customerId,
        productId: payload.productId,
        uploadedPhotos: payload.uploadedPhotos,
        templateId: null,
        templateSide: null,
        linkedOrderId: null,
        createdAt: new Date()
      };

      // Non-butterfly products skip allocation engine
      if (payload.productId !== 'Butterfly') {
        this.saveOrder(order);
        return {
          order,
          template: null as unknown as ButterflyTemplate,
          action: 'CREATED_NEW_TEMPLATE',
          printReady: false
        };
      }

      // Step 1: Search for the oldest Butterfly template waiting for a second customer
      const waitingTemplates = Array.from(this.templates.values())
        .filter((t) => t.status === 'WAITING_FOR_SECOND_CUSTOMER' && t.productId === 'Butterfly')
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

      const waitingTemplate = waitingTemplates[0];

      let template: ButterflyTemplate;
      let action: 'ASSIGNED_TO_WAITING_BLUE' | 'ASSIGNED_TO_WAITING_RED' | 'CREATED_NEW_TEMPLATE';

      if (waitingTemplate) {
        template = waitingTemplate;

        // Step 2: Assign customer to empty slot
        if (!template.blueOrderId) {
          template.blueOrderId = payload.orderId;
          template.blueCustomerId = payload.customerId;
          template.bluePhotos = payload.uploadedPhotos;
          action = 'ASSIGNED_TO_WAITING_BLUE';

          order.templateId = template.id;
          order.templateSide = 'BLUE';
          order.linkedOrderId = template.redOrderId;
        } else if (!template.redOrderId) {
          template.redOrderId = payload.orderId;
          template.redCustomerId = payload.customerId;
          template.redPhotos = payload.uploadedPhotos;
          action = 'ASSIGNED_TO_WAITING_RED';

          order.templateId = template.id;
          order.templateSide = 'RED';
          order.linkedOrderId = template.blueOrderId;

          // Update linked Blue order with Red order ID
          const blueOrder = this.orders.get(template.blueOrderId);
          if (blueOrder) {
            blueOrder.linkedOrderId = payload.orderId;
            this.orders.set(blueOrder.id, blueOrder);
          }
        } else {
          throw new Error(`Template ${template.id} is already full.`);
        }

        // Check if both Blue and Red slots are occupied
        if (template.blueOrderId && template.redOrderId) {
          template.status = 'READY_FOR_PRINT';
          template.pdfGenerated = true; // Trigger Print Generation
        }

        template.updatedAt = new Date();
        this.templates.set(template.id, template);
      } else {
        // Step 3: No waiting template exists -> Create new Butterfly template
        this.templateCounter++;
        const templateId = `tpl_butterfly_${Date.now()}_${this.templateCounter}`;
        const templateNumber = `TPL-BUTTERFLY-${String(this.templateCounter).padStart(3, '0')}`;

        template = {
          id: templateId,
          templateNumber,
          productId: 'Butterfly',
          status: 'WAITING_FOR_SECOND_CUSTOMER',
          blueOrderId: payload.orderId,
          redOrderId: null,
          blueCustomerId: payload.customerId,
          redCustomerId: null,
          bluePhotos: payload.uploadedPhotos,
          redPhotos: [],
          pdfGenerated: false,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        order.templateId = templateId;
        order.templateSide = 'BLUE';
        order.linkedOrderId = null;

        action = 'CREATED_NEW_TEMPLATE';
        this.templates.set(templateId, template);
      }

      this.saveOrder(order);

      return {
        order,
        template,
        action,
        printReady: template.status === 'READY_FOR_PRINT'
      };
    } finally {
      releaseLock();
    }
  }

  /**
   * Retrieve structured Order Details & Template status
   */
  public getOrderDetailsData(orderId: string) {
    const order = this.orders.get(orderId);
    if (!order || !order.templateId) return null;

    const template = this.templates.get(order.templateId);
    if (!template) return null;

    return {
      templateId: template.id,
      templateNumber: template.templateNumber,
      status: template.status,
      blue: {
        orderId: template.blueOrderId,
        customerId: template.blueCustomerId,
        status: template.blueOrderId ? 'Uploaded' : 'Waiting For Second Customer',
        photosCount: template.bluePhotos.length,
        photos: template.bluePhotos
      },
      red: {
        orderId: template.redOrderId,
        customerId: template.redCustomerId,
        status: template.redOrderId ? 'Uploaded' : 'Waiting For Second Customer',
        photosCount: template.redPhotos.length,
        photos: template.redPhotos
      },
      isPrintReady: template.status === 'READY_FOR_PRINT'
    };
  }
}

export const butterflyStore = new ButterflyStore();
