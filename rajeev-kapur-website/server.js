const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs'); 

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Add Cache-Control headers
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// Add the Content-Security-Policy header
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-eval';");
  next();
});

// Define routes to serve the EJS files
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/blogs', (req, res) => {
  res.render('blogs');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});