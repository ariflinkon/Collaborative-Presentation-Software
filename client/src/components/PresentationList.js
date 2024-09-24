import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PresentationList = () => {
  const [presentations, setPresentations] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    // Fetch list of presentations from server
    axios.get(`${process.env.REACT_APP_API_URL}/presentations`)
      .then(response => {
        setPresentations(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  const createPresentation = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/presentations`, { title: newTitle })
      .then(response => {
        setPresentations([...presentations, response.data]);
        setNewTitle('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="presentation-list">
      <h2>Available Presentations</h2>
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
