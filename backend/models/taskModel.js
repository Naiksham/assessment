// models/taskModel.js
import mongoose from 'mongoose';

// Define the task schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Create and export the Task model
const Task = mongoose.model('Task', taskSchema);

export default Task;
