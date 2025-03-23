import { Schema } from 'mongoose';

export const FAQSchema = new Schema({
  question: String,
  answer: String,
});