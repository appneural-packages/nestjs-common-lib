import { Schema } from 'mongoose';

export const PaymentMethodSchema = new Schema({
  methodName: String,
  details: String,
});