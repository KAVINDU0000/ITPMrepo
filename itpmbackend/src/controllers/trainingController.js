const Pet = require('../models/Pet');

const trainingVideos = {
  puppy: [
    { title: "Basic Puppy Commands", url: "https://example.com/puppy-commands", description: "Learn the essential commands for puppies under 1 year" },
    { title: "Potty Training Basics", url: "https://example.com/potty-training", description: "How to properly potty train your young puppy" },
    { title: "Socialization for Puppies", url: "https://example.com/puppy-social", description: "Important socialization techniques for young dogs" }
  ],
  adult: [
    { title: "Advanced Commands", url: "https://example.com/adult-commands", description: "Take your adult dog's training to the next level" },
    { title: "Leash Training Perfection", url: "https://example.com/leash-adult", description: "Perfect leash manners for adult dogs" },
    { title: "Behavior Correction", url: "https://example.com/behavior-adult", description: "How to correct common behavioral issues" }
  ],
  senior: [
    { title: "Senior Dog Care", url: "https://example.com/senior-care", description: "Special considerations for training older dogs" },
    { title: "Low Impact Exercises", url: "https://example.com/senior-exercise", description: "Gentle exercises suitable for senior pets" },
    { title: "Memory Games for Seniors", url: "https://example.com/senior-memory", description: "Keep your senior dog's mind sharp with these activities" }
  ]
};

exports.getTrainingVideos = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    
    let category;
    if (pet.age < 1) {
      category = 'puppy';
    } else if (pet.age < 8) {
      category = 'adult';
    } else {
      category = 'senior';
    }
    
    res.json({
      pet,
      category,
      videos: trainingVideos[category]
    });
    
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch training videos', error: error.message });
  }
};

exports.getAllTrainingVideos = (req, res) => {
  try {
    res.json(trainingVideos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch training videos', error: error.message });
  }
}; 