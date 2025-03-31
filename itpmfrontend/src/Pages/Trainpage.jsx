import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TrainPage.css';

const TrainingCard = ({ image, title, description }) => (
  <div className="training-card">
    <div className="training-img">
      <img src={image} alt={title} />
    </div>
    <div className="training-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="view-details-btn">View Details</button>
    </div>
  </div>
);

function TrainPage() {
  const trainingData = [
    {
      id: 1,
      image: 'pic3.jpg',
      title: 'Labrador Puppy Training',
      description: 'A comprehensive guide to training your Labrador puppy with easy-to-follow instructions and tips.'
    },
    {
      id: 2,
      image: 'pic4.jpg',
      title: 'German Shepherd Training',
      description: 'Teach your German Shepherd obedience with these structured training techniques and tips.'
    },
    {
      id: 3,
      image: 'pic5.jpg',
      title: 'Bulldog Training',
      description: 'Learn the basics of Bulldog training, including obedience, agility, and social skills.'
    }
  ];

  return (
    <div className="train-page">
      <Navbar />
      
      <div className="dropdown-container">
     
      </div>
      
      <div className="train-container">
        {trainingData.map(card => (
          <TrainingCard 
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default TrainPage;