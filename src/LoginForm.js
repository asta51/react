import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  return (
    <div style={styles.bb}>

    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
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
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
        <p style={styles.forgotPassword} onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </form>
    </div>
  </div>
  );
};

const styles = {
  bb:{
   
    height :'690px',
  },
  container: {
    width: '300px',
    margin: 'auto',
    marginTop: '100px',
    marginLeft: '250px',
    textAlign: 'center',  
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: '#f8f9fa', // Light gray background
  },
  heading: {
    color: '#007BFF', // Blue color
    marginBottom: '20px',
    fontSize: '30px',
  },
  form: {
    
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    color: '#555',
    textAlign: 'left', // Align labels to the left
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ced4da', // Light gray border
    borderRadius: '4px',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
  },
   button: {
    padding: '12px',
    background: '#007BFF', // Blue color
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'background 0.3s ease', // Smooth background transition
  },
  forgotPassword: {
    color: '#007BFF',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default LoginForm;
