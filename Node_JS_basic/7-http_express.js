const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Middleware de log des requêtes
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route students
app.get('/students', async (req, res) => {
  try {
    const list = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${list}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
