import { Schema } from 'mongoose';

export const UserSettingsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  notificationsEnabled: Boolean,
  theme: String,
});