import React, { useState, useEffect } from 'react';
import './PetSymptomChecker.css';
import PetSymptomApiService from './PetSymptomApiService';

const PetSymptomChecker = () => {
  // Create API service instance
  const apiService = new PetSymptomApiService();
  
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
  
  // State for recommendations and loading
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  
  // Fetch symptoms on component mount
  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await apiService.getSymptoms();
        if (response.success) {
          setSymptoms(response.data);
        } else {
          setError("Failed to load symptoms. Please try again.");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      }
    };
    
    fetchSymptoms();
    
    // Check for session ID in URL
    const urlParams = new URLSearchParams(window.location.search);
    const sid = urlParams.get('sid');
    if (sid) {
      loadSessionData(sid);
    }
  }, []);
  
  // Load session data if session ID is available
  const loadSessionData = async (sid) => {
    setIsLoading(true);
    try {
      const response = await apiService.getSession(sid);
      if (response.success) {
        setFormData(response.sessionData);
        setSessionId(sid);
        // Navigate to the appropriate step based on the data
        if (response.sessionData.mainSymptom) {
          setStep(6); // Go to recommendation step
          getRecommendation(response.sessionData);
        }
      } else {
        setError("Failed to load session data.");
      }
    } catch (err) {
      setError("An error occurred loading session data.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Save current session
  const saveSession = async () => {
    setIsLoading(true);
    try {
      const response = await apiService.saveSession({
        ...formData,
        timestamp: new Date().toISOString()
      });
      
      if (response.success) {
        setSessionId(response.sessionId);
        // Update URL with session ID for sharing
        window.history.pushState(
          {}, 
          '', 
          `${window.location.pathname}?sid=${response.sessionId}`
        );
        return response.sessionId;
      } else {
        setError("Failed to save session.");
        return null;
      }
    } catch (err) {
      setError("An error occurred saving your session.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  // Get recommendation based on form data
  const getRecommendation = async (data) => {
    setIsLoading(true);
    try {
      const response = await apiService.getRecommendation(data || formData);
      if (response.success) {
        setRecommendation(response.data);
      } else {
        setError("Failed to generate recommendation.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Get first aid info for selected symptom
  const getFirstAidInfo = async (symptom) => {
    try {
      const response = await apiService.getFirstAidInfo(symptom);
      if (response.success) {
        return response.data;
      } else {
        return "No specific first aid available. Please contact your veterinarian.";
      }
    } catch (err) {
      console.error("Error fetching first aid info:", err);
      return "No specific first aid available. Please contact your veterinarian.";
    }
  };

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
    
    // Only advance automatically on steps 2, 3, and 4
    if (step >= 2 && step <= 4) {
      setStep(step + 1);
    }
    // For step 1, don't advance automatically
  };

  // Move to next step
  const nextStep = async () => {
    // If moving to recommendation step, fetch recommendation
    if (step === 5) {
      await getRecommendation();
      // Also save the session for sharing
      await saveSession();
    }
    setStep(step + 1);
  };

  // Go to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="card">
            <h2 className="heading">Use this tool created with the help of Chewy's vet team to quickly find out what might be going on and what to do next.</h2>
            <p className="paragraph">What type of pet do you have?</p>
            <div className="options">
              <button 
                className={`button ${formData.petType === 'Dog' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('petType', 'Dog')}
              >
                Dog
              </button>
              <button 
                className={`button ${formData.petType === 'Cat' ? 'selected' : ''}`}
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
              disabled={!formData.petType}
            >
              Continue
            </button>
            {!formData.petType && (
              <p className="error-message">Please select a pet type to continue</p>
            )}
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
                className={`button ${formData.sex === 'Male' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('sex', 'Male')}
              >
                Male
              </button>
              <button 
                className={`button ${formData.sex === 'Female' ? 'selected' : ''}`}
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
                className={`button ${formData.age === 'Puppy (up to 2 years old)' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('age', 'Puppy (up to 2 years old)')}
              >
                {formData.petType === 'Dog' ? 'Puppy' : 'Kitten'} (up to 2 years old)
              </button>
              <button 
                className={`button ${formData.age === 'Adult (2-7 years old)' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('age', 'Adult (2-7 years old)')}
              >
                Adult (2-7 years old)
              </button>
              <button 
                className={`button ${formData.age === 'Senior (8+ years old)' ? 'selected' : ''}`}
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
                className={`button ${formData.isSpayed === true ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('isSpayed', true)}
              >
                Yes
              </button>
              <button 
                className={`button ${formData.isSpayed === false ? 'selected' : ''}`}
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
            <div className="options">
              <button 
                onClick={nextStep}
                className="start-button"
                disabled={!formData.mainSymptom || isLoading}
              >
                {isLoading ? 'Loading...' : 'Continue'}
              </button>
              <button 
                onClick={prevStep}
                className="back-button"
                disabled={isLoading}
              >
                Back
              </button>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="card">
            <h2 className="heading">Recommendation for {formData.mainSymptom}</h2>
            {isLoading ? (
              <p className="paragraph">Loading recommendation...</p>
            ) : (
              <div className="first-aid-box">
                <p className="paragraph">{recommendation}</p>
              </div>
            )}
            <div className="options">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}${window.location.pathname}?sid=${sessionId}`
                  );
                  alert("Shareable link copied to clipboard!");
                }} 
                className="start-button"
                disabled={!sessionId}
              >
                Share Result
              </button>
              <button onClick={() => {
                setStep(1);
                setFormData({
                  petType: '',
                  petName: '',
                  sex: '',
                  age: '',
                  isSpayed: null,
                  mainSymptom: ''
                });
                setRecommendation('');
                setSessionId(null);
                window.history.pushState({}, '', window.location.pathname);
              }} className="back-button">
                Start Over
              </button>
            </div>
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

  // Render the sidebar with selected data
  const renderSidebar = () => {
    return (
      <div className="sidebar">
        <h3 className="sidebar-title">Pet Information</h3>
        <div className="sidebar-content">
          <div className="sidebar-item">
            <div className="sidebar-label">Pet Type</div>
            <div className="sidebar-value">
              {formData.petType || <span className="sidebar-empty">Not selected</span>}
            </div>
          </div>
          
          {formData.petName && (
            <div className="sidebar-item">
              <div className="sidebar-label">Pet Name</div>
              <div className="sidebar-value">{formData.petName}</div>
            </div>
          )}
          
          <div className="sidebar-item">
            <div className="sidebar-label">Sex</div>
            <div className="sidebar-value">
              {formData.sex || <span className="sidebar-empty">Not selected</span>}
            </div>
          </div>
          
          <div className="sidebar-item">
            <div className="sidebar-label">Age</div>
            <div className="sidebar-value">
              {formData.age || <span className="sidebar-empty">Not selected</span>}
            </div>
          </div>
          
          {formData.isSpayed !== null && (
            <div className="sidebar-item">
              <div className="sidebar-label">
                {formData.sex === 'Male' ? 'Neutered' : 'Spayed'}
              </div>
              <div className="sidebar-value">
                {formData.isSpayed ? 'Yes' : 'No'}
              </div>
            </div>
          )}
          
          {formData.mainSymptom && (
            <div className="sidebar-item">
              <div className="sidebar-label">Main Symptom</div>
              <div className="sidebar-value">{formData.mainSymptom}</div>
            </div>
          )}
        </div>
        
        <div className="sidebar-footer">
          <p className="disclaimer">
            This information is for educational purposes only and not a substitute for professional veterinary advice.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="pet-checker-layout">
      {renderSidebar()}
      <div className="main-content">
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
          {error && <div className="error-message">{error}</div>}
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default PetSymptomChecker;