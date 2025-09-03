// Import du module http natif de Node.js
const http = require('http');
// Import de la fonction asynchrone pour compter les étudiants depuis le fichier CSV
const countStudents = require('./3-read_file_async');

// Création du serveur HTTP
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  // Si l'utilisateur accède à la racine "/"
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  
  // Si l'utilisateur accède à "/students"
  else if (req.url === '/students') {
    try {
      const list = await countStudents(process.argv[2]);
      res.statusCode = 200;
      res.end(`This is the list of our students\n${list}`);
    } catch (err) {
      res.statusCode = 500;
      res.end('This is the list of our students\nCannot load the database');
    }
  }

  // Si la route n’existe pas
  else {
    res.statusCode = 404;
    res.end('not found');
  }
});

// Écoute sur le port 1245
app.listen(1245);

module.exports = app;
