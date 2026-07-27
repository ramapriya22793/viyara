import { butterflyStore } from './butterflyAllocationEngine';

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`[TEST FAILED] ${message}`);
  }
}

function assertEqual(actual: unknown, expected: unknown, message: string) {
  if (actual !== expected) {
    throw new Error(`[TEST FAILED] ${message}: expected ${String(expected)}, got ${String(actual)}`);
  }
}

export async function runAllButterflyAllocationEngineTests(): Promise<void> {
  console.log('🧪 Running Butterfly Allocation Engine Verification Suite...');

  // Reset store
  butterflyStore.resetStore();

  // Test 1: Customer 1 creates Template #1 on Blue side
  const res1 = await butterflyStore.processButterflyAllocation({
    orderId: 'Order-1001',
    customerId: 'Customer-A',
    productId: 'Butterfly',
    uploadedPhotos: Array(8).fill('photo_a.jpg')
  });

  assertEqual(res1.action, 'CREATED_NEW_TEMPLATE', 'Action should be CREATED_NEW_TEMPLATE');
  assertEqual(res1.order.templateSide, 'BLUE', 'Order side should be BLUE');
  assertEqual(res1.template.blueOrderId, 'Order-1001', 'Blue order ID should match');
  assertEqual(res1.template.redOrderId, null, 'Red order ID should be null');
  assertEqual(res1.template.status, 'WAITING_FOR_SECOND_CUSTOMER', 'Template status waiting');
  assertEqual(res1.printReady, false, 'Print ready false for single customer');
  console.log('✅ Test 1 Passed: Customer 1 assigned to Blue slot of new template.');

  // Test 2: Customer 2 automatically assigned to Red side of Template #1
  const res2 = await butterflyStore.processButterflyAllocation({
    orderId: 'Order-1002',
    customerId: 'Customer-B',
    productId: 'Butterfly',
    uploadedPhotos: Array(8).fill('photo_b.jpg')
  });

  assertEqual(res2.action, 'ASSIGNED_TO_WAITING_RED', 'Action should be ASSIGNED_TO_WAITING_RED');
  assertEqual(res2.order.templateSide, 'RED', 'Order side should be RED');
  assertEqual(res2.template.blueOrderId, 'Order-1001', 'Blue order ID maintained');
  assertEqual(res2.template.redOrderId, 'Order-1002', 'Red order ID set');
  assertEqual(res2.template.status, 'READY_FOR_PRINT', 'Template status READY_FOR_PRINT');
  assertEqual(res2.printReady, true, 'Print ready true for dual customer template');
  console.log('✅ Test 2 Passed: Customer 2 assigned to Red slot, Template marked READY_FOR_PRINT.');

  // Test 3: Order linking check
  const order1 = butterflyStore.getOrder('Order-1001');
  const order2 = butterflyStore.getOrder('Order-1002');
  assertEqual(order1?.linkedOrderId, 'Order-1002', 'Order 1 linked to Order 2');
  assertEqual(order2?.linkedOrderId, 'Order-1001', 'Order 2 linked to Order 1');
  assertEqual(order1?.templateId, order2?.templateId, 'Both orders share template ID');
  console.log('✅ Test 3 Passed: Orders 1001 & 1002 are automatically linked.');

  // Test 4: Customer 3 creates Template #2 after Template #1 is full
  const res3 = await butterflyStore.processButterflyAllocation({
    orderId: 'Order-1003',
    customerId: 'Customer-C',
    productId: 'Butterfly',
    uploadedPhotos: Array(8).fill('photo_c.jpg')
  });

  // Customer 4 fills Red side of Template #2
  const res4 = await butterflyStore.processButterflyAllocation({
    orderId: 'Order-1004',
    customerId: 'Customer-D',
    productId: 'Butterfly',
    uploadedPhotos: Array(8).fill('photo_d.jpg')
  });

  assert(res3.template.id !== res1.template.id, 'Template 2 should be distinct from Template 1');
  assertEqual(res3.template.blueOrderId, 'Order-1003', 'Template 2 Blue set');
  assertEqual(res4.template.id, res3.template.id, 'Customer 4 assigned to Template 2');
  assertEqual(res4.template.redOrderId, 'Order-1004', 'Template 2 Red set');
  assertEqual(res4.template.status, 'READY_FOR_PRINT', 'Template 2 marked READY_FOR_PRINT');
  assertEqual(butterflyStore.getAllTemplates().length, 2, 'Total 2 templates for 4 customers');
  console.log('✅ Test 4 Passed: Customer 3 starts Template #2; Customer 4 fills Template #2.');

  // Test 5: Concurrency Protection test under simultaneous uploads
  butterflyStore.resetStore();
  const simultaneousUploads = Array.from({ length: 6 }).map((_, i) =>
    butterflyStore.processButterflyAllocation({
      orderId: `Sim-Order-${1000 + i}`,
      customerId: `Sim-Customer-${i}`,
      productId: 'Butterfly',
      uploadedPhotos: Array(8).fill(`sim_photo_${i}.jpg`)
    })
  );

  const results = await Promise.all(simultaneousUploads);
  assertEqual(results.length, 6, 'All 6 uploads processed');
  const allTemplates = butterflyStore.getAllTemplates();
  assertEqual(allTemplates.length, 3, 'Exactly 3 templates created for 6 concurrent uploads');
  allTemplates.forEach((t) => {
    assertEqual(t.status, 'READY_FOR_PRINT', 'Concurrent template fully filled');
    assert(t.blueOrderId !== null, 'Blue order populated');
    assert(t.redOrderId !== null, 'Red order populated');
  });
  console.log('✅ Test 5 Passed: Concurrent simultaneous uploads handled safely without race conditions.');

  console.log('🎉 ALL BUTTERFLY ALLOCATION ENGINE TESTS PASSED SUCCESSFULLY!');
}
