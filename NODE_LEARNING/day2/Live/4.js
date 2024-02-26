const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("welcome to homepage");
  } else if (req.url === "/h1") {
    return res.end("<h1>welcome to homepage</h1>");
  } else if (req.url === "/h2") {
    return res.end("<h2>welcome to homepage h2 simple</h2>");
  }

  // Important
  else if (req.url === "/important") {
    res.setHeader("content-type", "text/html");
    return res.end("<h2>welcome to homepage h2 extend</h2>");
  } else {
    res.end("nothing");
  }
});

server.listen(8080);
