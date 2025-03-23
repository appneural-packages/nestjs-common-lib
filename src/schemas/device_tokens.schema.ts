import { Schema } from 'mongoose';

export const DeviceTokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  token: String,
  platform: String,
  createdAt: { type: Date, default: Date.now },
});