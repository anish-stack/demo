const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Example data
const Data = [
    { id: 1, name: 'Anish' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Emily' }
];

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

// Route to show static data
app.get('/data', (req, res) => {
  res.json(Data);
});

// Route to create and send fresh data
app.get('/newData', (req, res) => {
  const freshData = [
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Bob' },
    { id: 6, name: 'Charlie' }
  ];
  res.json(freshData);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
