import React, { useState } from 'react';
import './PetSymptomChecker.css'; // Importing the custom CSS file

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

  // Go to the previous step
  const prevStep = () => {
    setStep(step - 1);
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
    "Flatulence", "Hiccups", "Mange", "Obesity", "Pale Gums",
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

  // Render different steps based on current step
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="card">
            <h2 className="heading">Use this tool created with the help of Chewy's vet team to quickly find out what might be going on and what to do next.</h2>
            <p className="paragraph">What type of pet do you have?</p>
            <div className="options">
              <button 
                className="button"
                onClick={() => handleOptionSelect('petType', 'Dog')}
              >
                Dog
              </button>
              <button 
                className="button"
                onClick={() => handleOptionSelect('petType', 'Cat')}
              >
                Cat
              </button>
            </div>
            <div className="input-container">
              <label className="label">
                Pet's Name (optional)
              </label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className="input"
                placeholder="Enter name (optional)"
              />
            </div>
            <button 
              onClick={nextStep}
              className="start-button"
            >
              Continue
            </button>
            <p className="disclaimer">
              The PetMD Symptom Checker, including related information and articles on this Site, is for educational purposes only and is not a substitute for veterinary care provided by a licensed veterinarian.
            </p>
          </div>
        );
      
      case 2:
        return (
          <div className="card">
            <h2 className="heading">Tell us about your {formData.petType.toLowerCase()}{formData.petName ? ` (${formData.petName})` : ''}</h2>
            <p className="paragraph">What's their sex?</p>
            <div className="options">
              <button 
                className="button"
                onClick={() => handleOptionSelect('sex', 'Male')}
              >
                Male
              </button>
              <button 
                className="button"
                onClick={() => handleOptionSelect('sex', 'Female')}
              >
                Female
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="card">
            <h2 className="heading">How old is {formData.sex === 'Male' ? 'he' : 'she'}?</h2>
            <div className="options">
              <button 
                className="button"
                onClick={() => handleOptionSelect('age', 'Puppy (up to 2 years old)')}
              >
                {formData.petType === 'Dog' ? 'Puppy' : 'Kitten'} (up to 2 years old)
              </button>
              <button 
                className="button"
                onClick={() => handleOptionSelect('age', 'Adult (2-7 years old)')}
              >
                Adult (2-7 years old)
              </button>
              <button 
                className="button"
                onClick={() => handleOptionSelect('age', 'Senior (8+ years old)')}
              >
                Senior (8+ years old)
              </button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="card">
            <h2 className="heading">
              Is your {formData.petType.toLowerCase()} {formData.sex === 'Male' ? 'neutered' : 'spayed'}?
            </h2>
            <div className="options">
              <button 
                className="button"
                onClick={() => handleOptionSelect('isSpayed', true)}
              >
                Yes
              </button>
              <button 
                className="button"
                onClick={() => handleOptionSelect('isSpayed', false)}
              >
                No
              </button>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="card">
            <h2 className="heading">Select the main symptom</h2>
            <div className="input-container">
              <label className="label">Choose a symptom:</label>
              <select
                name="mainSymptom"
                value={formData.mainSymptom}
                onChange={handleChange}
                className="dropdown"
              >
                <option value="">Select a symptom...</option>
                {symptoms.map((symptom, index) => (
                  <option key={index} value={symptom}>
                    {symptom}
                  </option>
                ))}
              </select>
            </div>
            <button 
              onClick={nextStep}
              className="start-button"
            >
              Continue
            </button>
            <button 
              onClick={prevStep}
              className="back-button"
            >
              Back
            </button>
          </div>
        );
      
      case 6:
        return (
          <div className="card">
            <h2 className="heading">First Aid for {formData.mainSymptom}</h2>
            <div className="first-aid-box">
              <p className="paragraph">{firstAidInfo[formData.mainSymptom] || "No specific first aid available. Please contact your vet."}</p>
            </div>
            <button onClick={nextStep} className="start-button">Finish</button>
            <button onClick={prevStep} className="back-button">Back</button>
          </div>
        );

      default:
        return (
          <div className="card">
            <h2 className="heading">Thank you for using our Symptom Checker!</h2>
            <p className="paragraph">You can always come back for more information or advice.</p>
            <button onClick={() => setStep(1)} className="start-button">Start Over</button>
          </div>
        );
    }
  };

  return (
    <div className="container">
      <div className="step-indicator-container">
        <div className={`step-indicator ${step === 1 ? 'active' : ''}`}>1</div>
        <div className={`step-connector ${step > 1 ? 'completed' : ''}`} />
        <div className={`step-indicator ${step === 2 ? 'active' : ''}`}>2</div>
        <div className={`step-connector ${step > 2 ? 'completed' : ''}`} />
        <div className={`step-indicator ${step === 3 ? 'active' : ''}`}>3</div>
        <div className={`step-connector ${step > 3 ? 'completed' : ''}`} />
        <div className={`step-indicator ${step === 4 ? 'active' : ''}`}>4</div>
        <div className={`step-connector ${step > 4 ? 'completed' : ''}`} />
        <div className={`step-indicator ${step === 5 ? 'active' : ''}`}>5</div>
        <div className={`step-connector ${step > 5 ? 'completed' : ''}`} />
        <div className={`step-indicator ${step === 6 ? 'active' : ''}`}>6</div>
      </div>
      {renderStep()}
    </div>
  );
};

export default PetSymptomChecker;
