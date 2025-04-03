import React from 'react';
import './PetSidebar.css'; // Import the CSS file for sidebar

const PetSidebar = ({ formData }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-heading">Selected Information</h3>
      <ul className="sidebar-list">
        <li><strong>Pet Type:</strong> {formData.petType || 'Not Selected'}</li>
        <li><strong>Pet Name:</strong> {formData.petName || 'Not Provided'}</li>
        <li><strong>Sex:</strong> {formData.sex || 'Not Selected'}</li>
        <li><strong>Age:</strong> {formData.age || 'Not Selected'}</li>
        <li><strong>Spayed/Neutered:</strong> {formData.isSpayed !== null ? (formData.isSpayed ? 'Yes' : 'No') : 'Not Selected'}</li>
        <li><strong>Main Symptom:</strong> {formData.mainSymptom || 'Not Selected'}</li>
      </ul>
    </div>
  );
};

export default PetSidebar;
