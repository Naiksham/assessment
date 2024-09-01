// routes/taskRoutes.js
import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask, // Ensure deleteTask is correctly imported
} from '../controllers/taskController.js';

const router = express.Router();

// Define routes for task operations
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask); // Route for deleting a task

export default router;
