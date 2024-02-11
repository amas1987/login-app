const express = require("express");

const app = express(); 

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post("/login", (req, res) => {

  const username = "admin";

  const password = "123";

  if (req.body.username === username && req.body.password === password) {

    return res.json({ message: `Logged in as ${username}` });

  } else {

    return res.json({ message: "Login Failed"});

  }

});

// Start the server

app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});