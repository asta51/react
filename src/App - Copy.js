import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import SignUpForm from './component/SignUpForm';

function App() {
  return (
    <Router>
      
      <div style={styles.cover}>
        <h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        </h2>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div style={styles.pageContainer}>
      <div >
        <h1>TOY STORE</h1>
      </div>
    </div>
  );
};

const styles = {
  cover:{
      backgroundSize: 'cover',
      backgroundImage: 'url("https://img1.wallspic.com/crops/0/6/7/2/4/142760/142760-light-space-technology-red-laser-6080x3420.jpg")',
      color: '#FFFFFF ',
  },
  pageContainer: {
    color:'#FFFFFF',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'left ',
    justifyContent: 'center',
  },
  contentContainer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#333',
  },
}

export default App;
