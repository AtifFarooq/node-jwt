const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(express.json());

const posts = [
    {
        username: "Atif",
        title: "What is Life?"
    },
    {
        username: "Shahid",
        title: "How to cook daal: 3 Easy Recipes"
    }
];

app.get('/posts', authenticateToken, (req, res) => {
    // only return posts that the user is authenticated to see
    const filteredPosts = posts.filter(post => {
        return post.username === req.user.name;
    });
    console.log(filteredPosts);
    res.json(filteredPosts);
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401); 
    // if a token has been passed in, verify it using the key
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        // if error, return saying that the user does not have access
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
