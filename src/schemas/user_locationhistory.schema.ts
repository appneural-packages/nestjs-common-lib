import { Schema } from 'mongoose';

export const UserLocationHistorySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  location: [Number],
  timestamp: { type: Date, default: Date.now },
});