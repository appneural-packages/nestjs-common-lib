import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: String,
  gender: String,
  dateOfBirth: Date,
  profilePicture: String,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});