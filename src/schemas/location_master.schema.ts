import { Schema } from 'mongoose';

export const LocationMasterSchema = new Schema({
  name: String,
  code: String,
});