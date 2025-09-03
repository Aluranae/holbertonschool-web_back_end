const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const list = await countStudents(process.argv[2]);
      res.statusCode = 200;
      res.end(`This is the list of our students\n${list}`);
    } catch (err) {
      res.statusCode = 500;
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('not found');
  }
});

app.listen(1245);

module.exports = app;
