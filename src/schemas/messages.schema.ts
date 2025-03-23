import { Schema } from 'mongoose';

export const MessageSchema = new Schema({
  chatId: { type: Schema.Types.ObjectId, ref: 'Chat' },
  senderId: { type: Schema.Types.ObjectId, ref: 'User' },
  message: String,
  sentAt: { type: Date, default: Date.now },
});