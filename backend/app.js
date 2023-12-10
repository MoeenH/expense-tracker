// app.js (or your main server file)
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes setup
readdirSync('./routes').map((route) => {
  if (route !== 'auth.js') {
    app.use('/api/v1', require(`./routes/${route}`));
  }
});

// Add authentication route separately
app.use('/auth', require('./routes/auth')); // Using the authentication route file

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
};

server();
