import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nickname from './components/Nickname';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Nickname />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;