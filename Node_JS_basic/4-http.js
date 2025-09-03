const http = require('http');

// Création du serveur
const app = http.createServer((req, res) => {
  // Définition du type de contenu
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Message renvoyé pour toute requête
  res.end('Hello Holberton School!');
});

// Écoute sur le port 1245
app.listen(1245);

module.exports = app;
