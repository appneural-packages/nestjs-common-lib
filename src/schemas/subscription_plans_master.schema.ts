import { Schema } from 'mongoose';

export const SubscriptionPlanSchema = new Schema({
  planName: String,
  price: Number,
  duration: Number,
});