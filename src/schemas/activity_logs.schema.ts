import { Schema, Types } from "mongoose";

export const ActivityLogSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "User" },
  activity: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
