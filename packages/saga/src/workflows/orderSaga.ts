import { createSaga, SagaStep } from "../orchestrator";

export interface OrderContext {
  orderId: string;
  userId: string;
  tenantId: string;
  items: Array<{ productId: string; quantity: number; price: number }>;
  totalAmount: number;
  // Step results
  inventoryReserved?: boolean;
  paymentId?: string;
  orderRecordId?: string;
  emailSent?: boolean;
}

/**
 * Reserve inventory step
 */
const reserveInventory: SagaStep<OrderContext> = {
  name: "reserve_inventory",
  async execute(ctx) {
    // TODO: Call ecommerce service to reserve inventory
    console.log(`Reserving inventory for order ${ctx.orderId}`);
    // Simulate API call
    return { ...ctx, inventoryReserved: true };
  },
  async compensate(ctx) {
    // Release reserved inventory
    console.log(`Releasing inventory for order ${ctx.orderId}`);
    // TODO: Call ecommerce service to release inventory
  },
};

/**
 * Charge payment step
 */
const chargePayment: SagaStep<OrderContext> = {
  name: "charge_payment",
  async execute(ctx) {
    // TODO: Call Stripe to charge payment
    console.log(`Charging payment for order ${ctx.orderId}`);
    // Simulate API call
    return { ...ctx, paymentId: `pay_${Date.now()}` };
  },
  async compensate(ctx) {
    if (ctx.paymentId) {
      // Refund the payment
      console.log(`Refunding payment ${ctx.paymentId}`);
      // TODO: Call Stripe to refund
    }
  },
};

/**
 * Create order record step
 */
const createOrderRecord: SagaStep<OrderContext> = {
  name: "create_order_record",
  async execute(ctx) {
    // TODO: Create order in database via api-gateway
    console.log(`Creating order record for ${ctx.orderId}`);
    // Simulate API call
    return { ...ctx, orderRecordId: `rec_${Date.now()}` };
  },
  async compensate(ctx) {
    if (ctx.orderRecordId) {
      // Mark order as cancelled
      console.log(`Cancelling order record ${ctx.orderRecordId}`);
      // TODO: Update order status to cancelled
    }
  },
};

/**
 * Send confirmation email step
 */
const sendConfirmationEmail: SagaStep<OrderContext> = {
  name: "send_confirmation_email",
  async execute(ctx) {
    // TODO: Send email via Resend
    console.log(`Sending confirmation email for order ${ctx.orderId}`);
    // Simulate API call
    return { ...ctx, emailSent: true };
  },
  // Email doesn't need compensation - we can send a cancellation email instead
};

/**
 * Create and return the order saga
 */
export function createOrderSaga() {
  return createSaga<OrderContext>("ecommerce_order")
    .addStep(reserveInventory)
    .addStep(chargePayment)
    .addStep(createOrderRecord)
    .addStep(sendConfirmationEmail);
}

/**
 * Execute an order saga
 */
export async function executeOrderSaga(order: Omit<OrderContext, "inventoryReserved" | "paymentId" | "orderRecordId" | "emailSent">) {
  const saga = createOrderSaga();
  return saga.execute(order as OrderContext);
}
