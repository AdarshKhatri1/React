const http = require("http");
const server = http.createServer((req, res) => {
  //   res.end([1, 2, 3, 4]); // can't send array should be stringify
  //   res.end("[1,2,3,4]");
  res.end(JSON.stringify([1, 2, 3, 4]));
});

server.listen(8080);
