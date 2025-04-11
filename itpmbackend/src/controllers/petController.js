const Pet = require('../models/Pet');

// Get all pets with optional filtering by customer name
exports.getAllPets = async (req, res) => {
  try {
    const { customerName } = req.query;  
    const query = {};

    if (customerName) query.customerName = { $regex: customerName, $options: 'i' }; 

    const pets = await Pet.find(query);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pets data', error: error.message });
  }
};

// Create a new pet
exports.createPet = async (req, res) => {
  try {
    const { customerName, breed, age, symptoms, behavior } = req.body;

    const newPet = new Pet({
      customerName,
      breed,
      age,
      symptoms,
      behavior
    });

    await newPet.save();
    res.status(201).json({ message: 'Pet details added successfully', pet: newPet });
  } catch (error) {
    res.status(500).json({ message: 'Error saving pet data', error: error.message });
  }
};

// Update a pet by ID
exports.updatePet = async (req, res) => {
  try {
    const { customerName, breed, age, symptoms, behavior } = req.body;

    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      { customerName, breed, age, symptoms, behavior },
      { new: true }
    );

    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update pet', error: error.message });
  }
};

// Delete a pet by ID
exports.deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    
    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete pet', error: error.message });
  }
};

// Check if a pet exists
exports.checkPet = async (req, res) => {
  const { breed, symptoms } = req.query;

  try {
    const petExists = await Pet.findOne({ breed, symptoms }); 

    if (petExists) {
      res.status(200).json({ exists: true, pet: petExists });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking pet data', error: error.message });
  }
}; 