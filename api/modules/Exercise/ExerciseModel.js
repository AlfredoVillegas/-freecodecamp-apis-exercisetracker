import mongoose from "mongoose";
const { SchemaTypes } = mongoose;
const ExerciseSchema = new mongoose.Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  description: String,
  duration: Number,
  date: Date,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

export { Exercise };
