const Pet = require('../models/Pet');

// Generate reports
exports.generateReport = async (req, res) => {
  try {
    const petCount = await Pet.countDocuments(); 
    const breedCount = await Pet.aggregate([
      { $group: { _id: "$breed", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({ petCount, breedCount });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate report', error: error.message });
  }
}; 