import mongoose from "mongoose";

// a structure of the user
const UserSchema = new mongoose.Schema(
  {
    about: {
      language: { type: Array },
      description: { type: String },
    },
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String },
    image: { type: String },
    phone: { type: Number },
    email: { type: String, required: [true, "PLease add an emailvalue"] },
    password: {
      type: String,
      required: [true, "PLease add a password value"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    address: {
      country: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
