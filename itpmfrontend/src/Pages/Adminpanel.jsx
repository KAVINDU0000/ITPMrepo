import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import './AdminPanel.css'; 

function AdminPanel() {
  const [pets, setPets] = useState([]);
  const [customerName, setCustomerName] = useState(''); 
  const [report, setReport] = useState(null);

  
  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/pets', {
        params: { customerName }, 
      });
      setPets(response.data);
    } catch (error) {
      Swal.fire('Error', 'Failed to fetch pets data', 'error');
    }
  };

  
  const deletePet = async (id) => {
    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this pet!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3001/api/pets/${id}`);
        Swal.fire('Deleted!', 'Pet has been deleted.', 'success');
        fetchPets(); 
      } catch (error) {
        Swal.fire('Error', 'Failed to delete pet', 'error');
      }
    }
  };

  
  const updatePet = async (id) => {
    const { value: updatedValues } = await Swal.fire({
      title: 'Update Pet Details',
      html: ` 
        <input id="swal-input-breed" class="swal2-input" placeholder="Enter Breed">
        <input id="swal-input-age" class="swal2-input" type="number" placeholder="Enter Age">
        <textarea id="swal-input-symptoms" class="swal2-textarea" placeholder="Describe Symptoms"></textarea>
        <textarea id="swal-input-behavior" class="swal2-textarea" placeholder="Describe Behavior Patterns"></textarea>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Update',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const breed = document.getElementById('swal-input-breed').value.trim();
        const age = parseInt(document.getElementById('swal-input-age').value, 10);
        const symptoms = document.getElementById('swal-input-symptoms').value.trim();
        const behavior = document.getElementById('swal-input-behavior').value.trim();

        if (isNaN(age) || age <= 0 || age > 15) {
          Swal.showValidationMessage('Age must be between 1 and 15');
          return false;
        }

        return { breed, age, symptoms, behavior };
      },
    });

    if (updatedValues) {
      try {
        await axios.put(`http://localhost:3001/api/pets/${id}`, updatedValues);
        Swal.fire('Updated!', 'Pet details have been updated.', 'success');
        fetchPets(); 
      } catch (error) {
        Swal.fire('Error', 'Failed to update pet', 'error');
      }
    }
  };


  const generateReport = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/report');
      setReport(response.data);
    } catch (error) {
      Swal.fire('Error', 'Failed to generate report', 'error');
    }
  };


  const downloadPDF = () => {
    if (!report) {
      Swal.fire('Error', 'No report data to download', 'error');
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Pet Management Report', 20, 20);

    doc.setFontSize(12);
    doc.text(`Total Pets: ${report.petCount}`, 20, 30);

    doc.text('Breed Breakdown:', 20, 40);
    report.breedCount.forEach((item, index) => {
      doc.text(`${item._id}: ${item.count}`, 20, 50 + index * 10);
    });

    doc.save('Pet_Management_Report.pdf');
  };

  useEffect(() => {
    fetchPets(); 
  }, [customerName]);

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h1>Admin Panel</h1>
      </header>

      <div className="admin-body">
        <div className="admin-content">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search by Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <button onClick={fetchPets}>Search</button>
          </div>

          <div className="pet-cards" id="pets">
            {pets.length > 0 ? (
              pets.map((pet) => (
                <div key={pet._id} className="pet-card">
                  <div className="pet-card-content">
                    <p>{pet.breed}, Age: {pet.age}</p>
                    <p>Customer: {pet.customerName}</p>
                  </div>
                  <div className="pet-card-actions">
                    <button onClick={() => updatePet(pet._id)} className="update-btn">Update</button>
                    <button onClick={() => deletePet(pet._id)} className="delete-btn">Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No pets found</p>
            )}
          </div>

          <div className="report-section" id="report">
          <button className="generate-report-btn" onClick={generateReport}>
  <span className='genbtn'>Generate Report</span>
</button>

            {report && (
              <div className="report-details">
                <h3>Report</h3>
                <p>Total Pets: {report.petCount}</p>
                <div className="breed-breakdown">
                  <h4>Breed Breakdown:</h4>
                  {report.breedCount.map((item) => (
                    <p key={item._id}>{item._id}: {item.count}</p>
                  ))}
                </div>
                <button className="download-pdf-btn" onClick={downloadPDF}>Download PDF</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
