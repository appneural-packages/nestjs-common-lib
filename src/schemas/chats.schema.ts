import { Schema } from 'mongoose';

export const ChatSchema = new Schema({
  matchId: { type: Schema.Types.ObjectId, ref: 'Match' },
  createdAt: { type: Date, default: Date.now },
});