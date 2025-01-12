const express = require('express');
const app = express();
const port = 3001; // Using port 3001 for the backend

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Being a Woman of Faith API' });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
