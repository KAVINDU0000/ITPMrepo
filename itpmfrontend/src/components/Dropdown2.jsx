import React from 'react';

const styles = {
  Dropdown: {
    position: 'relative', 
    cursor: 'pointer',
    top: '100px',
    left: '450px',
    width: '170px',
    height: '36px',
    padding: '0px 8px',
    border: '0.8px solid #d7d7d7',
    boxSizing: 'border-box',
    borderRadius: '24px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff',
    color: '#1d1d1d',
    fontSize: '20px',
    fontFamily: 'Montserrat',
    lineHeight: '36px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'All Ages',
  values: [
    'Puppy',
    'Adult',
    'Senior',
  ],
};

const Dropdown2 = (props) => {
  return (
    <select style={styles.Dropdown} defaultValue="">
      <option value="" disabled hidden>{props.label ?? defaultProps.label}</option>
      {(props.values ?? defaultProps.values).map((value) => (
        <option value={value} key={value}>{value}</option>
      ))}
    </select>
  );
};

export default Dropdown2;