import { Schema } from 'mongoose';

export const AppSettingMasterSchema = new Schema({
  settingName: String,
  settingValue: String,
});