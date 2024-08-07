import React from 'react';

const SubItem = ({ subfolder, onClick }) => {
  return (
    <div
      onClick={() => onClick(subfolder.id)}
      className="col-md-3 subitem-card"
      style={styles.card}
    >
      <h5 style={styles.title}>{subfolder.name}</h5>
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    backgroundColor: '#f8f9fa',
  },
  title: {
    margin: '0',
  }
};

export default SubItem;
