import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/submit', { name });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center app-container" style={{ height: '100vh' }}>
      <div className="text-center app-content">
        <h1 className="mb-4 text-primary app-title">Welcome to CPS</h1>
        <form className="form-group app-form" onSubmit={handleSubmit}>
          <label htmlFor="nameInput" className="h5 text-success app-label">Enter your Name</label>
          <input
            type="text"
            className="form-control mb-3 app-input"
            id="nameInput"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn btn-warning app-button">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default App;