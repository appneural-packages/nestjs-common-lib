import { Schema } from 'mongoose';

export const FeedbackSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  type: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
