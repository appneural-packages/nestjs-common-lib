import { Schema } from 'mongoose';

export const UserPreferenceSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  preferredGenders: [String],
  minAge: Number,
  maxAge: Number,
  preferredLocation: String,
  interests: [{ type: Schema.Types.ObjectId, ref: 'InterestMaster' }],
});