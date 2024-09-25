import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import PresentationList from './components/PresentationList';
import SlideEditor from './components/SlideEditor';
import NicknameEntry from './components/NicknameEntry';
import './App.css';

function App() {
  const [nickname, setNickname] = useState(localStorage.getItem('nickname') || '');

  useEffect(() => {
    // Set nickname in localStorage whenever it changes
    if (nickname) {
      localStorage.setItem('nickname', nickname);
    }
  }, [nickname]);

  const handleLogout = () => {
    // Clear session storage
    localStorage.removeItem('nickname');
    localStorage.removeItem('userId');
    setNickname('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={nickname ? <Navigate to="/presentations" /> : <NicknameEntry setNickname={setNickname} />}
          />
          <Route
            path="/presentations"
            element={nickname ? <PresentationList nickname={nickname} handleLogout={handleLogout} /> : <Navigate to="/" />}
          />
          <Route
            path="/edit/:id"
            element={nickname ? <SlideEditor nickname={nickname} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;