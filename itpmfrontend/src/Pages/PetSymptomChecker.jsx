import React, { useState } from 'react';

const PetSymptomChecker = () => {
  // State to track current step and form data
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petType: '',
    petName: '',
    sex: '',
    age: '',
    isSpayed: null,
    mainSymptom: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle button clicks for options
  const handleOptionSelect = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
    setStep(step + 1);
  };

  // Move to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // List of all symptoms
  const symptoms = [
    "Acting Weird", "Diarrhea", "Itching", "Vomiting", "Vomiting and Diarrhea",
    "Aggression", "Bad Breath", "Bleeding", "Blood in Stool", "Blood in Urine",
    "Breathing Problems", "Coughing", "Crying", "Depression", "Ear Problems",
    "Eye Problems", "Fever", "Hair Loss", "Head Tilt", "Lethargic",
    "Limping", "Loss of Appetite", "Lumps", "Pain", "Panting",
    "Paralysis", "Reverse Sneezing", "Seizures", "Shaking", "Skin Problems",
    "Sneezing", "Stiffness", "Swelling", "Urination Changes", "Weight Loss",
    "Anal Gland Problems", "Bloating", "Constipation", "Drooling", "Excessive Thirst",
    "Flatulence", "Hiccups", "Mange", "Obesitiy", "Pale Gums",
    "Runny Nose", "Scooting", "Snoring", "Stomach Noises", "Yellow Eyes",
    "Excessive Licking", "Excessive Barking"
  ];

  // First aid descriptions based on symptom
  const firstAidInfo = {
    "Vomiting": "Withhold food for 12-24 hours. Provide small amounts of water. If vomiting persists for more than 24 hours, contact your veterinarian.",
    "Diarrhea": "Feed a bland diet (boiled chicken and rice). Ensure your pet has access to clean water. If diarrhea persists for more than 48 hours or contains blood, contact your veterinarian.",
    "Itching": "Check for fleas or ticks. Bathe with a gentle pet-friendly shampoo. Avoid known allergens. Contact your vet if itching persists or if skin appears red or inflamed.",
    // Additional first aid descriptions would be added here for all symptoms
  };

  // CSS styles
  const styles = {
    container: "min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center py-12 px-4",
    card: "p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-100",
    title: "text-3xl font-bold text-center text-blue-800 mb-6",
    heading: "text-xl font-bold mb-6 text-blue-700",
    paragraph: "mb-4 text-gray-700",
    buttonPrimary: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 mb-3 shadow-md",
    buttonSecondary: "w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out mb-3",
    buttonSelected: "w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out mb-3",
    buttonStart: "mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md",
    inputField: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    stepIndicatorContainer: "flex justify-between items-center mb-8 max-w-md mx-auto",
    stepIndicator: (stepNumber) => 
      `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
        step === stepNumber ? 'bg-blue-600 text-white font-bold ring-4 ring-blue-200' : 
        step > stepNumber ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
      }`,
    stepConnector: (completed) => 
      `flex-grow h-1 mx-1 ${completed ? 'bg-green-500' : 'bg-gray-200'}`,
    symptomGrid: "grid grid-cols-2 gap-3 mb-5 max-h-64 overflow-y-auto pr-2",
    symptomButton: "bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-4 rounded-lg text-sm text-center border border-blue-200 transition-all duration-200 hover:shadow",
    firstAidBox: "bg-blue-50 p-5 rounded-lg mb-5 border-l-4 border-blue-500 shadow-sm",
    warningBox: "bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 shadow-sm",
    disclaimer: "mt-6 text-xs text-gray-500 italic text-center"
  };

  // Render different steps based on current step
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>Use this tool created with the help of Chewy's vet team to quickly find out what might be going on and what to do next.</h2>
            <p className={styles.paragraph}>What type of pet do you have?</p>
            <div className="flex flex-col gap-3">
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('petType', 'Dog')}
              >
                Dog
              </button>
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('petType', 'Cat')}
              >
                Cat
              </button>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 mb-2 font-medium">
                Pet's Name (optional)
              </label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Enter name (optional)"
              />
            </div>
            <button 
              onClick={nextStep}
              className={styles.buttonStart}
            >
              Continue
            </button>
            <p className={styles.disclaimer}>
              The PetMD Symptom Checker, including related information and articles on this Site, is for educational purposes only and is not a substitute for veterinary care provided by a licensed veterinarian.
            </p>
          </div>
        );
      
      case 2:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>Tell us about your {formData.petType.toLowerCase()}{formData.petName ? ` (${formData.petName})` : ''}</h2>
            <p className={styles.paragraph}>What's their sex?</p>
            <div className="flex flex-col gap-3">
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('sex', 'Male')}
              >
                Male
              </button>
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('sex', 'Female')}
              >
                Female
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>How old is {formData.sex === 'Male' ? 'he' : 'she'}?</h2>
            <div className="flex flex-col gap-3">
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('age', 'Puppy (up to 2 years old)')}
              >
                {formData.petType === 'Dog' ? 'Puppy' : 'Kitten'} (up to 2 years old)
              </button>
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('age', 'Adult (2-7 years old)')}
              >
                Adult (2-7 years old)
              </button>
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('age', 'Senior (8+ years old)')}
              >
                Senior (8+ years old)
              </button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>
              Is your {formData.petType.toLowerCase()} {formData.sex === 'Male' ? 'neutered' : 'spayed'}?
            </h2>
            <div className="flex flex-col gap-3">
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('isSpayed', true)}
              >
                Yes
              </button>
              <button 
                className={styles.buttonPrimary}
                onClick={() => handleOptionSelect('isSpayed', false)}
              >
                No
              </button>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>What's your {formData.petType.toLowerCase()}'s main symptom?</h2>
            <p className="mb-2 font-semibold text-blue-700">Common symptoms</p>
            <div className={styles.symptomGrid}>
              {symptoms.slice(0, 5).map((symptom) => (
                <button 
                  key={symptom}
                  className={styles.symptomButton + " bg-blue-200 hover:bg-blue-300 text-blue-900"}
                  onClick={() => handleOptionSelect('mainSymptom', symptom)}
                >
                  {symptom}
                </button>
              ))}
            </div>
            
            <p className="mb-2 font-semibold text-blue-700 mt-4">All symptoms</p>
            <div className={styles.symptomGrid}>
              {symptoms.slice(5).map((symptom) => (
                <button 
                  key={symptom}
                  className={styles.symptomButton}
                  onClick={() => handleOptionSelect('mainSymptom', symptom)}
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>First Aid for {formData.mainSymptom}</h2>
            <div className={styles.firstAidBox}>
              <p className="text-lg font-semibold mb-3 text-blue-800">What to do now:</p>
              <p>{firstAidInfo[formData.mainSymptom] || "Monitor your pet closely. If symptoms persist or worsen, contact your veterinarian immediately."}</p>
            </div>
            
            <div className={styles.warningBox}>
              <p className="text-lg font-semibold mb-3 text-yellow-800">When to see a vet:</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li className="mb-1">If symptoms persist for more than 24-48 hours</li>
                <li className="mb-1">If your pet seems to be in pain</li>
                <li className="mb-1">If your pet refuses to eat or drink</li>
                <li className="mb-1">If there are any additional symptoms</li>
              </ul>
            </div>
            
            <button 
              onClick={() => setStep(1)}
              className={styles.buttonStart}
            >
              Start Over
            </button>
          </div>
        );
      
      default:
        return <div>Something went wrong.</div>;
    }
  };

  // Render step indicators
  const renderStepIndicators = () => {
    return (
      <div className={styles.stepIndicatorContainer}>
        {[1, 2, 3, 4, 5, 6].map((stepNumber, index) => (
          <React.Fragment key={stepNumber}>
            <div className={styles.stepIndicator(stepNumber)}>
              {stepNumber}
            </div>
            {index < 5 && (
              <div className={styles.stepConnector(step > stepNumber)} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pet Symptom Checker</h1>
      {renderStepIndicators()}
      {renderStep()}
    </div>
  );
};

export default PetSymptomChecker;