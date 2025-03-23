import { Schema } from 'mongoose';

export const MatchSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  matchedUserId: { type: Schema.Types.ObjectId, ref: 'User' },
  matchedAt: { type: Date, default: Date.now },
});
