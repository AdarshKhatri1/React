const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello brother how are you ok");
});

server.listen(8080);
