const express = require('express');
const sequelize = require('./config/db');
const { DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const Presentation = sequelize.define('Presentation', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
});

sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('An error occurred while synchronizing the models:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/add-name', (req, res) => {
  const { name } = req.body;
  // Assuming you want to save the name in the Presentation model
  Presentation.create({ title: name, content: '' })
    .then(presentation => res.status(201).json(presentation))
    .catch(err => res.status(400).json({ error: err.message }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});