const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');

// Get training videos for a specific pet
router.get('/training-videos/:id', trainingController.getTrainingVideos);

// Get all training videos
router.get('/all-training-videos', trainingController.getAllTrainingVideos);

module.exports = router; 