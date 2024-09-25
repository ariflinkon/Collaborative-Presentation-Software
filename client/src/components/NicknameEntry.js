// client/src/components/NicknameEntry.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NicknameEntry = ({ setNickname }) => {
  const [inputValue, setInputValue] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      try {
        // Send the nickname to the backend for storage
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, { nickname: inputValue.trim() });
        const { nickname, id } = response.data;

        // Set the nickname and store it in localStorage
        setNickname(nickname);
        localStorage.setItem('userId', id);  // Store user ID for future reference
        localStorage.setItem('nickname', nickname);

        // Redirect to presentation list
        Navigate('/presentations');
      } catch (error) {
        console.error('Error saving nickname:', error);
      }
    }
  };

  return (
    <div className="nickname-entry">
      <h1>Enter Your Nickname</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter nickname"
          required
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default NicknameEntry;
