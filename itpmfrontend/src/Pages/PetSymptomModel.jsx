// models/PetSymptomModel.js

class PetSymptomModel {
    constructor() {
      this.symptoms = [
        "Acting Weird", "Diarrhea", "Itching", "Vomiting", "Vomiting and Diarrhea",
        "Aggression", "Bad Breath", "Bleeding", "Blood in Stool", "Blood in Urine",
        "Breathing Problems", "Coughing", "Crying", "Depression", "Ear Problems",
        "Eye Problems", "Fever", "Hair Loss", "Head Tilt", "Lethargic",
        "Limping", "Loss of Appetite", "Lumps", "Pain", "Panting",
        "Paralysis", "Reverse Sneezing", "Seizures", "Shaking", "Skin Problems",
        "Sneezing", "Stiffness", "Swelling", "Urination Changes", "Weight Loss",
        "Anal Gland Problems", "Bloating", "Constipation", "Drooling", "Excessive Thirst",
        "Flatulence", "Hiccups", "Mange", "Obesity", "Pale Gums",
        "Runny Nose", "Scooting", "Snoring", "Stomach Noises", "Yellow Eyes",
        "Excessive Licking", "Excessive Barking"
      ];
      
      this.firstAidInfo = {
        "Vomiting": "Withhold food for 12-24 hours. Provide small amounts of water. If vomiting persists for more than 24 hours, contact your veterinarian.",
        "Diarrhea": "Feed a bland diet (boiled chicken and rice). Ensure your pet has access to clean water. If diarrhea persists for more than 48 hours or contains blood, contact your veterinarian.",
        "Itching": "Check for fleas or ticks. Bathe with a gentle pet-friendly shampoo. Avoid known allergens. Contact your vet if itching persists or if skin appears red or inflamed.",
        "Breathing Problems": "Keep your pet calm and limit activity. Make sure they are in a well-ventilated area. Seek immediate veterinary care as breathing problems can be life-threatening.",
        "Limping": "Rest your pet and limit their movement. Apply a cold compress for 10-15 minutes if there's swelling. If limping persists for more than 24 hours, contact your veterinarian.",
        "Skin Problems": "Check for parasites. Keep the area clean and prevent your pet from scratching or licking. Use pet-safe moisturizers for dry skin. Consult your vet if the problem persists.",
        "Blood in Stool": "Monitor your pet closely. Write down when it started and how often it occurs. Withhold food for 12 hours but provide water. Contact your veterinarian as this can indicate serious issues.",
        "Coughing": "Monitor the frequency and severity. Keep your pet in a humid environment. Avoid collar pressure by using a harness instead. Consult your vet if coughing persists more than 24 hours."
 
      };
      
      this.possibleCauses = {
        "Vomiting": [
          "Dietary indiscretion (eating something they shouldn't)",
          "Parasites",
          "Viral infections",
          "Bacterial infections",
          "Pancreatitis",
          "Kidney disease",
          "Liver disease",
          "Foreign body ingestion"
        ],
        "Diarrhea": [
          "Dietary changes",
          "Food allergies or intolerance",
          "Parasites (giardia, roundworms, hookworms)",
          "Viral infections",
          "Bacterial infections",
          "Inflammatory bowel disease",
          "Stress or anxiety"
        ],
        // Add more causes for other symptoms
      };
    }
  
    // Get all available symptoms
    getAllSymptoms() {
      return this.symptoms;
    }
  
    // Get first aid information for a specific symptom
    getFirstAidInfo(symptom) {
      return this.firstAidInfo[symptom] || "No specific first aid available. Please contact your veterinarian.";
    }
  
    // Get possible causes for a specific symptom
    getPossibleCauses(symptom) {
      return this.possibleCauses[symptom] || ["Unknown causes. Please consult with your veterinarian."];
    }
  
    // Get recommendation based on pet info and symptom
    getRecommendation(petInfo) {
      const { petType, mainSymptom, age } = petInfo;
      
      // Basic recommendation template
      let recommendation = `Based on the information provided about your ${petType.toLowerCase()}`;
      
      if (petInfo.petName) {
        recommendation += ` ${petInfo.petName}`;
      }
      
      recommendation += `, showing symptoms of ${mainSymptom}, we recommend the following:\n\n`;
      
      // Add first aid info
      recommendation += `First Aid: ${this.getFirstAidInfo(mainSymptom)}\n\n`;
      
      // Customize based on age
      if (age.includes("Puppy") || age.includes("Kitten")) {
        recommendation += "Since your pet is young, they may be more vulnerable to certain conditions. Monitor them closely and consult with a veterinarian sooner rather than later.\n\n";
      } else if (age.includes("Senior")) {
        recommendation += "As your pet is a senior, certain symptoms may indicate age-related conditions. We recommend consulting with your veterinarian promptly.\n\n";
      }
      
      // Add urgency level
      const urgentSymptoms = ["Breathing Problems", "Blood in Stool", "Blood in Urine", "Seizures", "Paralysis", "Pale Gums"];
      if (urgentSymptoms.includes(mainSymptom)) {
        recommendation += "⚠️ URGENT: This symptom may indicate a serious condition. Please seek veterinary care immediately.\n\n";
      } else {
        recommendation += "If symptoms persist for more than 24-48 hours or worsen, please consult with your veterinarian.\n\n";
      }
      
      return recommendation;
    }
  
    // Save session data to database or storage
    async saveSession(sessionData) {
      try {
        // In a real implementation, this would connect to your database
        console.log("Saving session data:", sessionData);
        
        // Simulate API call with a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            // Generate a random session ID
            const sessionId = Math.random().toString(36).substring(2, 15);
            resolve({
              success: true,
              sessionId: sessionId,
              message: "Session saved successfully"
            });
          }, 500);
        });
      } catch (error) {
        console.error("Error saving session:", error);
        throw new Error("Failed to save session data");
      }
    }
  
    // Get session data by ID
    async getSession(sessionId) {
      try {
        // In a real implementation, this would fetch from your database
        console.log("Fetching session:", sessionId);
        
        // Simulate API call with a promise
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (sessionId) {
              // Mock session data
              resolve({
                success: true,
                sessionData: {
                  petType: "Dog",
                  petName: "Max",
                  sex: "Male",
                  age: "Adult (2-7 years old)",
                  isSpayed: true,
                  mainSymptom: "Limping",
                  timestamp: new Date().toISOString()
                }
              });
            } else {
              reject(new Error("Invalid session ID"));
            }
          }, 500);
        });
      } catch (error) {
        console.error("Error fetching session:", error);
        throw new Error("Failed to retrieve session data");
      }
    }
  }
  
  export default PetSymptomModel;