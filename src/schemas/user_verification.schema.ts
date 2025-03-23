import { Schema } from 'mongoose';

export const UserVerificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  idProofUrl: String,
  selfieUrl: String,
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  submittedAt: Date,
  verifiedAt: Date,
});