import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  // Check if data is available before accessing its properties
  if (!data) {
    return null; // or handle this case accordingly
  }

  return (
    <div style={styles.card}>
      <img 
         style={styles.img} 
         src={data.avatar_url} 
         alt="User Avatar"
      />
      <h2 
        style={styles.name}>
        <b>{data.name}</b>
      </h2>
      <h1 
        style={styles.description}>
            {data.location}
      </h1>
      <h1 style={styles.description}>
        {data.bio}
      </h1>
      

    </div>

  );
};

const styles = {
  card: {
    border: '3px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    maxWidth: '500px',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa'
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  img: {
    width: '200px',
    height:'200px',
    borderRadius: '50%'
  }
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
