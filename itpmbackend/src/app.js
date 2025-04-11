const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const petRoutes = require('./routes/petRoutes');
const trainingVideoRoutes = require('./routes/trainingVideoRoutes');
const reportRoutes = require('./routes/reportRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/pets', petRoutes);
app.use('/api/training-videos', trainingVideoRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/messages', messageRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app; 