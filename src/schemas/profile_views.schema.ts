import { Schema } from 'mongoose';

export const ProfileViewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  viewedUserId: { type: Schema.Types.ObjectId, ref: 'User' },
  viewedAt: { type: Date, default: Date.now },
});