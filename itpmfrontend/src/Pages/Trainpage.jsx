import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Trainpage.css';

const Trainpage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/api/pets');
        setPets(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch pets');
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const getAgeCategory = (age) => {
    if (age < 1) return { label: 'Puppy', className: 'puppy' };
    if (age < 8) return { label: 'Adult', className: 'adult' };
    return { label: 'Senior', className: 'senior' };
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading pets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="training-page-container">
        <div className="error-message">
          <p>{error}</p>
          <button 
            className="view-button" 
            style={{ maxWidth: '200px', margin: '20px auto' }}
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="training-page-container">
      <h1 className="page-title">Pet Training Videos</h1>
      <p className="page-subtitle">Find age-appropriate training videos tailored to your pet's needs</p>
      
      {pets.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🐾</div>
          <p className="empty-message">No pets found. Add pets to see training recommendations.</p>
          <Link to="/pets/add" className="view-button" style={{ maxWidth: '200px', margin: '0 auto' }}>
            Add Pet
          </Link>
        </div>
      ) : (
        <div className="pets-grid">
          {pets.map(pet => {
            const ageCategory = getAgeCategory(pet.age);
            
            return (
              <div key={pet._id} className="pet-card">
                <div className="pet-card-header">
                  <h2 className="pet-card-title">{pet.customerName}'s Pet</h2>
                </div>
                <div className="pet-card-body">
                  <div className="pet-info">
                    <span className="pet-info-label">Breed:</span>
                    <span className="pet-info-value">{pet.breed}</span>
                  </div>
                  <div className="pet-info">
                    <span className="pet-info-label">Age:</span>
                    <span className="pet-info-value">{pet.age} {pet.age === 1 ? 'year' : 'years'}</span>
                  </div>
                  <div className="pet-info">
                    <span className="pet-info-label">Category:</span>
                    <span className={`pet-age-badge ${ageCategory.className}`}>
                      {ageCategory.label}
                    </span>
                  </div>
                  <Link to={`/training/${pet._id}`} className="view-button">
                    View Training Videos
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Trainpage;