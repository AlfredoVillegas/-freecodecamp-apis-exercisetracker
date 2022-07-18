import mongoose from "mongoose";
const { SchemaTypes } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
  },
  { versionKey: false }
);

const User = mongoose.model("User", UserSchema);

export { User };
//62d05cf71099fe0b9d8f1fb3
