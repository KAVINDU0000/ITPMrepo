const express = require('express');
const router = express.Router();
const trainingVideoController = require('../controllers/trainingVideoController');

// Get training videos for a specific pet
router.get('/pet/:id', trainingVideoController.getTrainingVideosForPet);

// Get all training videos
router.get('/all', trainingVideoController.getAllTrainingVideos);

module.exports = router; 