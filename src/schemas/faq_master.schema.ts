import { Schema } from 'mongoose';

export const FAQMasterSchema = new Schema({
  question: String,
  answer: String,
});