const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.method === 'GET' && req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    const initialHeaderResponse = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then((data) => res.end(`${initialHeaderResponse}${data.join('\n')}`))
      .catch((err) => res.end(`${initialHeaderResponse}${err.message}`));
  }
});

app.listen(1245);

module.exports = app;
