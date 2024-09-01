// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Ensure CORS is enabled if required
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // To parse incoming JSON requests

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/tasks', taskRoutes); // Ensure this line correctly mounts the routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
