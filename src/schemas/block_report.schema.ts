import { Schema } from 'mongoose';

export const BlockReportSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  reportedUserId: { type: Schema.Types.ObjectId, ref: 'User' },
  type: String,
  reason: String,
  createdAt: { type: Date, default: Date.now },
});