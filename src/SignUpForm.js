// SignUpForm.js

import React, { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    // Basic password validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Your sign-up logic goes here
    console.log('Signing up with:', { username, firstName, lastName, email, mobileNumber, password });
  };

  return (
    <div style={styles.bb}>

    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <form style={styles.form}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            />
        </label>
        <label style={styles.label}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
            />
        </label>
        <label style={styles.label}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
            />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            />
        </label>
        <label style={styles.label}>
          Mobile Number:
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            style={styles.input}
            />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            />
        </label>
        <label style={styles.label}>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            />
        </label>
        <button type="button" onClick={handleSignUp} style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

const styles = {
  body:{
    overflow:'hidden',
  },
  container: {
    width: '350px',
    margin: 'auto',
    marginTop: '30px',
    marginBottom:'20px',
    marginLeft: '250px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    opacity:.9,
    backgroundColor: '#f8f9fa', // Light gray background
  },
  heading: {
    color: '#007BFF',
    marginBottom: '20px',
    fontSize: 'px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    hieght:'80px',
  },
  label: {
    marginBottom: '10px',
    color: '#555',
    textAlign: 'left', 
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '12px',
    background: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'background 0.3s ease', 
  },
  error: {
    color: '#FF0000',
    marginBottom: '10px',
  },
};

export default SignUpForm;
