// In your auth.js or authentication route file
const express = require('express');
const router = express.Router();

// Sample users (replace this with your actual authentication logic)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check credentials against stored user data
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;
