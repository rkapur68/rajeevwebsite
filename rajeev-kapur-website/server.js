// Import the Express.js framework
const express = require('express');
// Create an Express application
const app = express();
// Define the port number the server will listen on
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console indicating the server is running
  console.log(`Server listening at http://localhost:${port}`);
});