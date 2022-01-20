const express = require('express');
const path = require('path');

// branch 1 work
// branch 2 work
// branch 3 work
// branch 4 work 1
// branch 4 work 2
// branch 4 work 3
// branch 4 work 4
// branch 4 work 5
// Init app
const app = express();

let banned_users = [
    { "username": "spongebob" },
    { "username": "patrick" },
    { "username": "xino" },
    { "username": "squidward" }
]

// Home route
app.get('/', (req, res) => {
    res.send({ "one": "weeeee!" })
});

app.get('/banned-users', (req, res) => {
    res.send(banned_users)
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
