const express = require('express'); // Import the Express.js module
const app = express(); // Create an instance of an Express application
const port = process.env.PORT || 3000; // Set the port from an environment variable or default to 3000

// Define a route handler for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello world!'); // Send "Hello, world!" as the response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`); // Log a message to the console
});
