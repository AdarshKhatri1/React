const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/post") {
    return res.end("post responst");
  } else if (req.url === "/todo") {
    return res.end("todo success");
  } else {
    return res.end("Not matched any link");
  }
});

server.listen(8080);
