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
      
      // Age-specific considerations for different symptoms
      this.ageSpecificConsiderations = {
        "Puppy (up to 2 years old)": {
          "general": "Young pets are more susceptible to infections as their immune systems are still developing. They're also prone to accidents and ingesting foreign objects due to their curious nature.",
          "Vomiting": "Young pets who vomit may become dehydrated quickly. Monitor closely and seek veterinary attention if vomiting occurs more than twice in 24 hours.",
          "Diarrhea": "Diarrhea in young pets can rapidly lead to dehydration. Consult your vet promptly, especially if it lasts more than 12 hours.",
          "Limping": "In young pets, limping could indicate developmental issues like hip dysplasia or growth plate injuries. These require professional assessment.",
          "Coughing": "Young pets are at higher risk for infectious diseases like kennel cough. Ensure vaccinations are up to date.",
          "Itching": "Young pets are more likely to have parasites like fleas or mites. Check carefully and consult your vet for safe treatment options suitable for their age."
        },
        "Adult (2-7 years old)": {
          "general": "Adult pets typically have stronger immune systems but may develop chronic conditions that require ongoing management.",
          "Vomiting": "In adult pets, occasional vomiting may be less concerning but could indicate developing issues like food allergies or inflammatory conditions.",
          "Limping": "In adult pets, limping often indicates joint issues, injuries, or early arthritis. If it persists more than 24 hours, consult your vet.",
          "Skin Problems": "Adult pets are more likely to develop allergies that manifest as skin issues. Consider environmental or food allergies if symptoms persist.",
          "Loss of Appetite": "Changes in appetite in adult pets can indicate dental problems or internal issues. Monitor weight and consult your vet if it persists."
        },
        "Senior (8+ years old)": {
          "general": "Senior pets are more prone to chronic conditions and may have multiple health issues simultaneously. Changes in behavior or symptoms should be taken seriously.",
          "Limping": "In senior pets, limping often indicates arthritis or degenerative joint disease. Discuss pain management options with your veterinarian.",
          "Vomiting": "Senior pets are more susceptible to organ dysfunction. Vomiting could indicate kidney, liver, or other systemic issues requiring prompt attention.",
          "Coughing": "In senior pets, coughing may indicate heart disease or respiratory conditions that need veterinary assessment.",
          "Excessive Thirst": "Increased thirst in senior pets can signal kidney disease, diabetes, or other metabolic conditions requiring veterinary care.",
          "Lethargy": "While older pets naturally slow down, sudden lethargy can indicate serious health issues. Consult your veterinarian if you notice significant changes."
        }
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
      const { petType, mainSymptom, age, sex, isSpayed } = petInfo;
      
      // Basic recommendation template
      let recommendation = `Based on the information provided about your ${petType.toLowerCase()}`;
      
      if (petInfo.petName) {
        recommendation += ` ${petInfo.petName}`;
      }
      
      recommendation += `, showing symptoms of ${mainSymptom}, we recommend the following:\n\n`;
      
      // Add first aid info
      recommendation += `First Aid: ${this.getFirstAidInfo(mainSymptom)}\n\n`;
      
      // Add age-specific advice
      recommendation += "Age-Specific Considerations:\n";
      
      // General age advice
      if (this.ageSpecificConsiderations[age] && this.ageSpecificConsiderations[age]["general"]) {
        recommendation += this.ageSpecificConsiderations[age]["general"] + "\n\n";
      }
      
      // Symptom-specific age advice
      if (this.ageSpecificConsiderations[age] && this.ageSpecificConsiderations[age][mainSymptom]) {
        recommendation += this.ageSpecificConsiderations[age][mainSymptom] + "\n\n";
      }
      
      // Sex-specific considerations for intact pets
      if (!isSpayed) {
        if (sex === "Female") {
          recommendation += "Female-Specific Considerations:\n";
          if (age === "Adult (2-7 years old)") {
            recommendation += "In intact female adult pets, some symptoms can be related to reproductive cycles or conditions. If your pet isn't spayed, consider discussing spaying with your veterinarian to prevent reproductive health issues.\n\n";
          } else if (age === "Senior (8+ years old)") {
            recommendation += "In intact female senior pets, reproductive organ issues become more common. Consider consulting with your veterinarian about spaying to prevent conditions like pyometra (uterine infection) which can be life-threatening.\n\n";
          }
        } else if (sex === "Male") {
          recommendation += "Male-Specific Considerations:\n";
          if (age === "Adult (2-7 years old)" || age === "Senior (8+ years old)") {
            recommendation += "In intact male pets, certain behaviors and health issues can be related to hormonal influences. Consider discussing neutering with your veterinarian to prevent conditions like prostate issues and certain types of aggression.\n\n";
          }
        }
      }
      
      // Add urgency level
      const urgentSymptoms = ["Breathing Problems", "Blood in Stool", "Blood in Urine", "Seizures", "Paralysis", "Pale Gums"];
      
      // Add age-specific urgency adjustments
      let urgencyMessage = "";
      if (urgentSymptoms.includes(mainSymptom)) {
        urgencyMessage = "⚠️ URGENT: This symptom may indicate a serious condition. Please seek veterinary care immediately.";
      } else {
        // Different follow-up timelines based on age
        if (age === "Puppy (up to 2 years old)") {
          urgencyMessage = "If symptoms persist for more than 12-24 hours or worsen, please consult with your veterinarian as young pets can deteriorate quickly.";
        } else if (age === "Senior (8+ years old)") {
          urgencyMessage = "If symptoms persist for more than 24 hours or worsen, please consult with your veterinarian as senior pets may have less reserve capacity to handle illness.";
        } else {
          urgencyMessage = "If symptoms persist for more than 24-48 hours or worsen, please consult with your veterinarian.";
        }
      }
      
      recommendation += urgencyMessage + "\n\n";
      
      // Add preventive advice based on symptom and age
      recommendation += "Preventive Measures:\n";
      
      if (mainSymptom === "Vomiting" || mainSymptom === "Diarrhea") {
        recommendation += "• Maintain a consistent diet and avoid sudden food changes\n";
        recommendation += "• Keep potentially harmful foods and objects out of reach\n";
        if (age === "Puppy (up to 2 years old)") {
          recommendation += "• Ensure proper vaccination to prevent infectious causes\n";
          recommendation += "• Regular deworming as recommended by your veterinarian\n";
        }
      } else if (mainSymptom === "Itching" || mainSymptom === "Skin Problems") {
        recommendation += "• Regular flea and tick prevention\n";
        recommendation += "• Regular grooming and skin checks\n";
        if (age === "Adult (2-7 years old)" || age === "Senior (8+ years old)") {
          recommendation += "• Consider environmental or food allergies if issues persist\n";
        }
      } else if (mainSymptom === "Limping") {
        recommendation += "• Maintain appropriate exercise levels\n";
        if (age === "Puppy (up to 2 years old)") {
          recommendation += "• Ensure proper nutrition for developing bones and joints\n";
        } else if (age === "Senior (8+ years old)") {
          recommendation += "• Consider joint supplements after discussing with your veterinarian\n";
          recommendation += "• Maintain a healthy weight to reduce stress on joints\n";
        }
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