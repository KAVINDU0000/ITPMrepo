import React from 'react';

const styles = {
  ImageContainer: {
    position: 'relative',
    width: '100%',
    height: '600px',
    backgroundImage: `url('/petconnect.png')`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    padding: '15px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white', 
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '0.3s',
    position: 'relative',
    right:'666px',
    top: '230px',
  },
  ButtonHover: {
    backgroundColor: '#ff4500', 
  },
};

const Image = () => {
  return (
    <div style={styles.ImageContainer}>
    </div>
  );
};

export default Image;
