import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import './Firstaidpage.css';

function Firstaidpage() {
  const showFormPopup = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Enter Pet Details',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Enter Customer Name">
        <input id="swal-input2" class="swal2-input" placeholder="Enter Breed">
        <input id="swal-input3" class="swal2-input" placeholder="Enter Age" type="number">
        <textarea id="swal-input4" class="swal2-textarea" placeholder="Describe Symptoms"></textarea>
        <textarea id="swal-input5" class="swal2-textarea" placeholder="Describe Behavior Patterns"></textarea>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const customerName = document.getElementById('swal-input1').value.trim();
        const breed = document.getElementById('swal-input2').value.trim();
        const ageInput = document.getElementById('swal-input3').value.trim();
        const symptoms = document.getElementById('swal-input4').value.trim();
        const behavior = document.getElementById('swal-input5').value.trim();

        const nameRegex = /^[A-Za-z\s]+$/; // Only letters & spaces
        const age = parseInt(ageInput, 10);

        if (!customerName || !nameRegex.test(customerName)) {
          Swal.showValidationMessage('Customer name must contain only letters and spaces.');
          return false;
        }

        if (!breed || !nameRegex.test(breed)) {
          Swal.showValidationMessage('Breed must contain only letters and spaces.');
          return false;
        }

        if (!ageInput || isNaN(age) || age < 1 || age > 15) {
          Swal.showValidationMessage('Age must be a number between 1 and 15.');
          return false;
        }

        if (!symptoms) {
          Swal.showValidationMessage('Symptoms cannot be empty.');
          return false;
        }

        if (!behavior) {
          Swal.showValidationMessage('Behavior patterns cannot be empty.');
          return false;
        }

        return { customerName, breed, age, symptoms, behavior };
      }
    });

    if (formValues) {
      try {
        const checkResponse = await axios.get('http://localhost:3001/checkPet', { 
          params: { breed: formValues.breed, symptoms: formValues.symptoms } 
        });

        if (checkResponse.data.exists) {
          Swal.fire({
            title: 'Duplicate Found',
            text: 'A pet with the same breed and symptoms already exists.',
            icon: 'warning',
          });
          return;
        }

        const response = await axios.post('http://localhost:3001/createPet', formValues);
        
        if (response.status === 201) {
          Swal.fire({
            title: 'Success!',
            text: 'Pet details added successfully.',
            icon: 'success',
          });
        } else {
          throw new Error('Unexpected server response');
        }
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: error.response?.data?.message || 'Failed to save data. Please try again.',
          icon: 'error',
        });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="firstaid-page-container">
        <Card />
    
        <button 
          onClick={showFormPopup} 
          className="pet-details-button"
          style={styles.button}
        >
          Enter Pet Details
        </button>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  button: {
    position: "absolute",
    top: "65%",
    left: "15%",
    transform: "translate(-50%, -50%)",
    padding: "2em 3em",
    fontSize: "16px",
    backgroundColor: "lightgrey",
    color: "black",
    borderRadius: "10px",
    border: "3px solid black",
    cursor: "pointer",
    transition: "0.3s ease-in-out", 
  }
};

export default Firstaidpage;
