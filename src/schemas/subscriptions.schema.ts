import { Schema } from 'mongoose';

export const SubscriptionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  planId: { type: Schema.Types.ObjectId, ref: 'SubscriptionPlanMaster' },
  startDate: Date,
  endDate: Date,
  status: String,
});