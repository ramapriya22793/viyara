/**
 * Order Tracking Visibility Helper
 * 
 * Rules:
 * - "Track Order" button must NOT be displayed for general products (e.g. Gift Message, Kitkat Chocolates, etc.).
 * - "Track Order" button MUST be displayed ONLY for Butterfly Box and Magazine products.
 */

export interface OrderItem {
  id: string;
  productName: string;
  sku?: string;
  variant?: string;
  quantity: number;
  paymentStatus: 'PAID' | 'PENDING' | 'REFUNDED';
  fulfillmentStatus: 'UNFULFILLED' | 'FULFILLED';
  refNumber: string;
  designStatus: string;
  productionProgressPercent: number;
  trackingUrl?: string;
}

/**
 * Checks if the "Track Order" button should be rendered for a given product name or SKU.
 * Returns true ONLY if the product is a "Butterfly" or "Magazine" product.
 */
export function shouldDisplayTrackOrderButton(productNameOrSku: string): boolean {
  if (!productNameOrSku) return false;
  
  const normalized = productNameOrSku.toLowerCase().trim();
  
  const isButterfly = normalized.includes('butterfly');
  const isMagazine = normalized.includes('magazine');

  return isButterfly || isMagazine;
}

/**
 * Filter list of order items or decorate them with trackOrderVisible property.
 */
export function decorateOrderItemsWithTracking(items: OrderItem[]): Array<OrderItem & { trackOrderVisible: boolean }> {
  return items.map((item) => ({
    ...item,
    trackOrderVisible: shouldDisplayTrackOrderButton(item.productName || item.sku || '')
  }));
}
