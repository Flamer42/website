const http = require('http')
const fs = require("fs");

let gamesOn = 0;
let games = {};
let id = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/game' && req.method === 'GET') {
    fs.readFile(__dirname + '/game.html', function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write(error);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }
  if (req.url === '/getID' && req.method === 'GET') {
    id = id + 1;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ id: id }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
