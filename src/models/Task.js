import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      unique: true,
      minLength: [3, "Title must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minLength: [3, "Description must be at least 3 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Task || model("Task", taskSchema);
