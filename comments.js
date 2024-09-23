// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add a middleware to parse the body of the request
app.use(express.json());

// Array to store the comments
let comments = [];

// POST /comments
app.post('/comments', (req, res) => {
    // Get the comment from the body of the request
    const comment = req.body.comment;
    // Store the comment in the array
    comments.push(comment);
    // Send the comment in the response
    res.json(comment);
});

// GET /comments
app.get('/comments', (req, res) => {
    // Send the list of comments in the response
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});