import { shouldDisplayTrackOrderButton, decorateOrderItemsWithTracking, type OrderItem } from './orderTrackingVisibility';

function assertEqual(actual: unknown, expected: unknown, message: string) {
  if (actual !== expected) {
    throw new Error(`[TEST FAILED] ${message}: expected ${String(expected)}, got ${String(actual)}`);
  }
}

export function runAllOrderTrackingVisibilityTests(): void {
  console.log('🧪 Running Order Tracking Visibility Verification Suite...');

  // Test 1: Gift Message (From User Screenshot) -> Track Order must NOT be displayed
  const giftMessageResult = shouldDisplayTrackOrderButton('Gift Message');
  assertEqual(giftMessageResult, false, 'Gift Message should NOT display Track Order button');
  console.log('✅ Test 1 Passed: Gift Message -> Track Order button hidden.');

  // Test 2: Kitkat Chocolates (From User Screenshot) -> Track Order must NOT be displayed
  const kitkatResult = shouldDisplayTrackOrderButton('I never need a break from you - 3 Kitkat Chocolates');
  assertEqual(kitkatResult, false, 'Kitkat Chocolates should NOT display Track Order button');
  console.log('✅ Test 2 Passed: Kitkat Chocolates -> Track Order button hidden.');

  // Test 3: Butterfly product -> Track Order MUST be displayed
  const butterflyResult = shouldDisplayTrackOrderButton('Butterfly Box Keepsake');
  assertEqual(butterflyResult, true, 'Butterfly product MUST display Track Order button');
  console.log('✅ Test 3 Passed: Butterfly product -> Track Order button displayed.');

  // Test 4: Magazine product -> Track Order MUST be displayed
  const magazineResult = shouldDisplayTrackOrderButton('Personalized Photo Magazine');
  assertEqual(magazineResult, true, 'Magazine product MUST display Track Order button');
  console.log('✅ Test 4 Passed: Magazine product -> Track Order button displayed.');

  // Test 5: Batch Decoration Test
  const mockItems: OrderItem[] = [
    {
      id: 'ord_101',
      productName: 'Gift Message',
      quantity: 1,
      paymentStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      refNumber: 'SHOPIFY-170569-15908393287909',
      designStatus: 'AWAITING DESIGN',
      productionProgressPercent: 18
    },
    {
      id: 'ord_102',
      productName: 'I never need a break from you - 3 Kitkat Chocolates',
      sku: 'CH-KK-03',
      quantity: 1,
      paymentStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      refNumber: 'SHOPIFY-170569-15908393255141',
      designStatus: 'AWAITING DESIGN',
      productionProgressPercent: 18
    },
    {
      id: 'ord_103',
      productName: 'Butterfly Box Gift',
      quantity: 1,
      paymentStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      refNumber: 'SHOPIFY-170569-15908393299999',
      designStatus: 'AWAITING DESIGN',
      productionProgressPercent: 50
    },
    {
      id: 'ord_104',
      productName: 'Custom Cover Magazine',
      quantity: 1,
      paymentStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      refNumber: 'SHOPIFY-170569-15908393888888',
      designStatus: 'AWAITING DESIGN',
      productionProgressPercent: 65
    }
  ];

  const decorated = decorateOrderItemsWithTracking(mockItems);
  assertEqual(decorated[0].trackOrderVisible, false, 'Item 0 (Gift Message) trackOrderVisible false');
  assertEqual(decorated[1].trackOrderVisible, false, 'Item 1 (Kitkat) trackOrderVisible false');
  assertEqual(decorated[2].trackOrderVisible, true, 'Item 2 (Butterfly) trackOrderVisible true');
  assertEqual(decorated[3].trackOrderVisible, true, 'Item 3 (Magazine) trackOrderVisible true');
  console.log('✅ Test 5 Passed: Array decoration correctly sets trackOrderVisible flag.');

  console.log('🎉 ALL ORDER TRACKING VISIBILITY TESTS PASSED SUCCESSFULLY!');
}
