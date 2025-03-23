import { Schema } from 'mongoose';

export const UserPhotoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  photoUrl: String,
  isProfilePicture: Boolean,
  createdAt: { type: Date, default: Date.now },
});