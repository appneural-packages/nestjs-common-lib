// interfaces/payment.interface.ts

export interface IPayment {
  _id?: string;
  userId: string;
  amount: number;
  currency: string; // e.g., "USD", "INR"
  status: "pending" | "completed" | "failed" | "refunded";
  method: string; // e.g., "card", "UPI", "wallet", "netbanking"
  transactionId: string;
  paymentGateway?: string; // e.g., "Razorpay", "Stripe"
  createdAt?: Date;
  updatedAt?: Date;
}
