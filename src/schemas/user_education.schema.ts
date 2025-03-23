import { Schema } from 'mongoose';

export const UserEducationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  school: String,
  degree: String,
  startDate: Date,
  endDate: Date,
});