const mongoose = require('mongoose');

const TrainingVideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, default: '/images/default-thumbnail.jpg' },
  ageCategory: { 
    type: String, 
    required: true,
    enum: ['puppy', 'adult', 'senior'] 
  },
  tags: [String],
  duration: { type: String },
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TrainingVideo', TrainingVideoSchema); 