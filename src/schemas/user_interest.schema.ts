import { Schema } from 'mongoose';

export const UserInterestSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  interestId: { type: Schema.Types.ObjectId, ref: 'Interest' },
});