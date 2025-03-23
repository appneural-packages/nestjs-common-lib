import { Schema } from 'mongoose';

export const UserLifestyleSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  lifestyleOptionId: { type: Schema.Types.ObjectId, ref: 'LifestyleOptionMaster' },
});