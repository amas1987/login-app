// Import the 'express' module
const express = require("express");

// Create an instance of the Express application
const app = express(); 

// Set the port for the server to run on
const port = 3000;

// Enable parsing of URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Define a POST route for handling login requests
app.post("/login", (req, res) => {

// Hardcoded username and password for demonstration purposes
  const username = "admin";

  const password = "123";

  // Check if the provided username and password match the hardcoded values
  if (req.body.username === username && req.body.password === password) {

    // Respond with a success message if the login is successful
    return res.json({ message: `Logged in as ${username}` });

  } else {

    // Respond with a failure message if the login fails
    return res.json({ message: "Login Failed"});

  }

});

// Start the server and listen on the specified port
app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});
