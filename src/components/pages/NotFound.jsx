// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.header}>404 - Page not found</h1>
        <p style={styles.message}>Oops! The page you are searching doesn't exist.</p>
        <p>You can return <Link to="/" style={styles.link}>home page</Link> or search other.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '48px',
    color: '#333',
  },
  message: {
    fontSize: '18px',
    color: '#666',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFound;
