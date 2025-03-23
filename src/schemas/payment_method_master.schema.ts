import { Schema } from 'mongoose';

export const PaymentMethodMasterSchema = new Schema({
  methodName: String,
  details: String,
});