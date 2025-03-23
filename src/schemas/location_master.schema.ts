import { Schema } from 'mongoose';

export const LocationSchema = new Schema({
  name: String,
  code: String,
});