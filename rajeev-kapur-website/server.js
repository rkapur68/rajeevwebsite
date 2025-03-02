const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or 3000

app.use(express.static('public')); // Serve static files from 'public'

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});