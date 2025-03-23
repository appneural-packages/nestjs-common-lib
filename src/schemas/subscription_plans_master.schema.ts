import { Schema } from 'mongoose';

export const SubscriptionPlanMasterSchema = new Schema({
  planName: String,
  price: Number,
  duration: Number,
});