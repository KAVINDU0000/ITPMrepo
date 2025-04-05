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
    
    // New: Specific considerations based on spay/neuter status
    this.neuterSpayConsiderations = {
      "Male": {
        "spayed": { // Neutered
          "general": "Neutered male pets generally have a reduced risk of reproductive-related issues and certain behaviors compared to intact males.",
          "Aggression": "While neutering can reduce some aggression issues, it's not a cure-all for behavioral problems. Training and proper socialization are still important factors.",
          "Urination Changes": "Neutered males are less likely to mark territory, but urination changes could indicate urinary tract infections or other health issues.",
          "Excessive Barking": "Neutering can reduce some hormone-driven behaviors, but barking may be related to anxiety, boredom, or other causes that need to be addressed.",
          "Acting Weird": "Sudden behavior changes in neutered pets are less likely to be hormone-related and may indicate pain, anxiety, or health issues that should be evaluated."
        },
        "intact": { // Not neutered
          "general": "Intact male pets may exhibit hormone-driven behaviors and are at risk for certain reproductive-related health issues.",
          "Aggression": "Hormone-influenced aggression can be more common in intact males. This may be directed at other male animals or occur in the presence of females in heat.",
          "Urination Changes": "Marking behavior is common in intact males. However, changes in urination patterns may also indicate urinary or prostate issues.",
          "Excessive Barking": "Intact males may be more vocal and reactive, especially in response to females in heat or when competing with other males.",
          "Swelling": "In intact males, swelling in the testicular area can indicate serious conditions like testicular torsion or cancer and requires immediate veterinary attention.",
          "Lumps": "Intact males are at higher risk for testicular tumors. Any lumps in the genital area should be evaluated promptly by a veterinarian.",
          "Pain": "Intact males are more susceptible to prostate issues, which can cause pain or discomfort, especially in older dogs."
        }
      },
      "Female": {
        "spayed": { // Spayed
          "general": "Spayed female pets have significantly reduced risks of reproductive cancers and infections.",
          "Bloating": "While spayed females have a slightly higher risk of urinary incontinence, persistent bloating could indicate other gastrointestinal issues.",
          "Urination Changes": "Urinary incontinence can occasionally develop in spayed females due to reduced estrogen. This is treatable and should be evaluated by your vet.",
          "Weight Gain": "Spaying can slightly decrease metabolic rate. Monitor food intake and ensure regular exercise to maintain a healthy weight.",
          "Bleeding": "Any bleeding in a spayed female is abnormal and should be evaluated by a veterinarian, as it's not related to reproductive cycles."
        },
        "intact": { // Not spayed
          "general": "Intact female pets are at risk for several reproductive-related conditions including pyometra (uterine infection), mammary tumors, and complications from pregnancy.",
          "Bleeding": "In intact females, unexpected bleeding could be related to estrus cycles but can also indicate serious conditions like pyometra. Consult your veterinarian.",
          "Swelling": "Swelling in the mammary or genital areas of intact females can indicate infections, tumors, or pregnancy-related issues requiring veterinary attention.",
          "Aggression": "Hormonal fluctuations during heat cycles can cause behavioral changes including aggression or irritability in some intact females.",
          "Excessive Licking": "Excessive licking of the genital area in intact females might indicate heat cycles, infections, or other reproductive issues.",
          "Lethargy": "In intact females, lethargy combined with other symptoms could indicate pyometra, a life-threatening uterine infection requiring immediate veterinary care.",
          "Excessive Thirst": "Excessive drinking in intact females, especially after a heat cycle, could indicate developing pyometra and requires prompt veterinary attention."
        }
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
    
    // NEW: Add neuter/spay specific considerations
    const neuterStatus = isSpayed ? "spayed" : "intact";
    recommendation += `${sex}-Specific Considerations (${neuterStatus}):\n`;
    
    // General neuter/spay advice
    if (this.neuterSpayConsiderations[sex] && 
        this.neuterSpayConsiderations[sex][neuterStatus] && 
        this.neuterSpayConsiderations[sex][neuterStatus]["general"]) {
      recommendation += this.neuterSpayConsiderations[sex][neuterStatus]["general"] + "\n\n";
    }
    
    // Symptom-specific neuter/spay advice
    if (this.neuterSpayConsiderations[sex] && 
        this.neuterSpayConsiderations[sex][neuterStatus] && 
        this.neuterSpayConsiderations[sex][neuterStatus][mainSymptom]) {
      recommendation += this.neuterSpayConsiderations[sex][neuterStatus][mainSymptom] + "\n\n";
    }
    
    // Recommendations for intact pets
    if (!isSpayed) {
      if (sex === "Female") {
        recommendation += "Additional Female Intact Considerations:\n";
        if (age === "Adult (2-7 years old)") {
          recommendation += "In intact female adult pets, symptoms can be related to reproductive cycles or conditions. Consider discussing spaying with your veterinarian to prevent reproductive health issues.\n\n";
        } else if (age === "Senior (8+ years old)") {
          recommendation += "In intact female senior pets, reproductive organ issues become more common with age. Consider consulting with your veterinarian about spaying to prevent conditions like pyometra (uterine infection) which can be life-threatening.\n\n";
        }
      } else if (sex === "Male") {
        recommendation += "Additional Male Intact Considerations:\n";
        if (age === "Adult (2-7 years old)" || age === "Senior (8+ years old)") {
          recommendation += "In intact male pets, certain behaviors and health issues can be related to hormonal influences. Consider discussing neutering with your veterinarian to prevent conditions like prostate issues and certain types of aggression.\n\n";
        }
      }
    }
    
    // Add urgency level
    const urgentSymptoms = ["Breathing Problems", "Blood in Stool", "Blood in Urine", "Seizures", "Paralysis", "Pale Gums"];
    
    // Additional urgent symptoms based on sex and neuter status
    if (sex === "Female" && !isSpayed && 
        (mainSymptom === "Lethargy" || mainSymptom === "Swelling" || 
         mainSymptom === "Fever" || mainSymptom === "Excessive Thirst")) {
      urgentSymptoms.push(mainSymptom); // Add these as urgent for intact females
    }
    
    if (sex === "Male" && !isSpayed && 
        (mainSymptom === "Pain" || mainSymptom === "Swelling" && age === "Senior (8+ years old)")) {
      urgentSymptoms.push(mainSymptom); // Add these as urgent for intact senior males
    }
    
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
    
    // Add preventive advice based on symptom, age, and neuter/spay status
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
    
    // Add spay/neuter recommendation for intact pets with relevant symptoms
    if (!isSpayed) {
      const reproductiveSymptoms = ["Aggression", "Urination Changes", "Swelling", "Bleeding", "Excessive Licking"];
      if (reproductiveSymptoms.includes(mainSymptom)) {
        recommendation += `• Consider discussing ${sex === "Male" ? "neutering" : "spaying"} with your veterinarian as a preventive measure\n`;
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