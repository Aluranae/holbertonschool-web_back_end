const express = require('express');

// Création de l'application Express
const app = express();

// Définition de la route "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Écoute sur le port 1245
app.listen(1245);

module.exports = app;
