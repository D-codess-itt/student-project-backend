import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import cryptoRoutes from './routes/cryptoRoutes.js';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// Middleware
// IMPORTANT: CORS must be configured this way to accept cookies from the frontend
app.use(cors({
  origin: ['http://localhost:5173', 'https://bernardina-student-crypo-app-project.netlify.app'], 
  credentials: true 
}));
app.use(express.json()); // Allows us to accept JSON data in the body
app.use(cookieParser()); // Allows us to read the JWT cookies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/crypto', cryptoRoutes);

app.get('/api/profile', protect, (req, res) => {
  // req.user was populated by our middleware above!
  res.json({
    name: req.user.name,
    email: req.user.email,
    id: req.user._id
  });
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('DB Connection Error: ', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));