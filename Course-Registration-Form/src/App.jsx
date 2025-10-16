// App.jsx
import React from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>🎓 Course Registration System</h1>
      <div className="form-section">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
