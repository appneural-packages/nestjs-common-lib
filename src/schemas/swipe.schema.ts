import { Schema } from 'mongoose';

export const SwipeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  targetUserId: { type: Schema.Types.ObjectId, ref: 'User' },
  action: String,
  createdAt: { type: Date, default: Date.now },
});