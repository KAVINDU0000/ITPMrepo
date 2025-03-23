import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Trainpage.css';
import Dropdown1 from '../components/Dropdown1';
import Dropdown2 from '../components/Dropdown2';

function Trainpage() {
  return (
    <>
      <Navbar />
      
      <Dropdown1 />
      <Dropdown2 />

      <div className='train-container'>
        <div className='training-card'>
          <div className='training-img'>
            <img src='pic3.jpg' alt='Labrador Puppy' />
          </div>
          <div className='training-info'>
            <h2>Labour Puppy Training</h2>
            <p>A comprehensive guide to training your Labrador puppy with easy-to-follow instructions and tips.</p>
            <button className='view-details-btn'>View Details</button>
          </div>
        </div>

        <div className='training-card'>
          <div className='training-img'>
            <img src='pic4.jpg' alt='German Shepherd' />
          </div>
          <div className='training-info'>
            <h2>German Shepherd Training</h2>
            <p>Teach your German Shepherd obedience with these structured training techniques and tips.</p>
            <button className='view-details-btn'>View Details</button>
          </div>
        </div>

        <div className='training-card'>
          <div className='training-img'>
            <img src='pic5.jpg' alt='Bulldog' />
          </div>
          <div className='training-info'>
            <h2>Bulldog Training</h2>
            <p>Learn the basics of Bulldog training, including obedience, agility, and social skills.</p>
            <button className='view-details-btn'>View Details</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Trainpage;
