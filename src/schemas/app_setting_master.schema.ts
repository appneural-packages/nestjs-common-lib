import { Schema } from 'mongoose';

export const AppSettingSchema = new Schema({
  settingName: String,
  settingValue: String,
});