const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Get all pets with optional filtering
router.get('/', petController.getAllPets);

// Create a new pet
router.post('/', petController.createPet);

// Update a pet
router.put('/:id', petController.updatePet);

// Delete a pet
router.delete('/:id', petController.deletePet);

// Check if a pet exists
router.get('/check', petController.checkPet);

module.exports = router; 