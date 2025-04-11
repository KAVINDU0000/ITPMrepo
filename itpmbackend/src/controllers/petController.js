const Pet = require('../models/Pet');

// Get all pets
exports.getAllPets = async (req, res) => {
  try {
    const { customerName } = req.query;
    const query = {};

    if (customerName) {
      query.customerName = { $regex: customerName, $options: 'i' };
    }

    const pets = await Pet.find(query);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pets data' });
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
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add pet' });
  }
};

// Update a pet
exports.updatePet = async (req, res) => {
  try {
    const { customerName, breed, age, symptoms, behavior } = req.body;

    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      { customerName, breed, age, symptoms, behavior },
      { new: true }
    );

    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update pet' });
  }
};

// Delete a pet
exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete pet' });
  }
};

// Check if pet exists
exports.checkPet = async (req, res) => {
  const { breed, symptoms } = req.query;

  try {
    const petExists = await Pet.findOne({ breed, symptoms });

    if (petExists) {
      res.status(200).json({ exists: true, pet: petExists });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error checking pet data', error: err.message });
  }
}; 