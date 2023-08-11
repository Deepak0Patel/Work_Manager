import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  about: {
    type: String,
    required: true,
  },
  profileURL: {
    type: String,
  },
});
export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
