// client/src/components/PresentationList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PresentationList = ({ nickname, handleLogout }) => {
  const [presentations, setPresentations] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    // Fetch list of presentations from the server
    axios.get(`${process.env.REACT_APP_API_URL}/presentations`, { withCredentials: true })
      .then(response => {
        setPresentations(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  const createPresentation = () => {
    const userId = nickname; // Use the stored nickname (or user ID depending on backend logic)
    if (newTitle.trim() && userId) {
      axios.post(`${process.env.REACT_APP_API_URL}/presentations`, { title: newTitle, creatorId: userId }, { withCredentials: true })
        .then(response => {
          setPresentations([...presentations, response.data]);
          setNewTitle('');
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="presentation-list">
      <h2>Welcome, {nickname}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3>Available Presentations</h3>
      <ul>
        {presentations.map(presentation => (
          <li key={presentation.id}>
            <Link to={`/edit/${presentation.id}`}>{presentation.title}</Link>
          </li>
        ))}
      </ul>
      <div className="create-presentation">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Presentation Title"
        />
        <button onClick={createPresentation}>Create</button>
      </div>
    </div>
  );
};

export default PresentationList;
