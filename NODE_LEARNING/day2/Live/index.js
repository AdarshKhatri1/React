console.log("HEllo");

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("End call");
});

server.listen(8080);
