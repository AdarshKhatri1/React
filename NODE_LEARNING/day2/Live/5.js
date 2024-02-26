const http = require("http");
const { json } = require("stream/consumers");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/post") {
      const fs = require("fs");
      const data = fs.readFileSync("./user.json", { encoding: "utf-8" });
      console.log(data);

      res.setHeader("content-type", "application/json");
      return res.end(JSON.stringify(data));
    } else if (req.url === "/stream") {
      const reader = require("fs");
      const Stream = reader.createReadStream("./user.json", {
        encoding: "utf-8",
      });
      Stream.pipe(res);
    } else {
      res.end("get end");
    }
  } else if (req.method === "POST") {
    if (req.url === "/post_payload") {
      let str = "";
      req.on("data", (packet) => {
        str += packet;
      });
      console.log("str not working", str);
      res.end("payload attach");
    } else if (req.url === "/working") {
      let str = "";
      req.on("data", (packet) => {
        str += packet;
      });
      req.on("end", () => {
        const fs = require("fs");
        fs.writeFileSync("./dummy.txt", str, { encoding: "utf-8" });
        console.log(str);
        res.end("We saved data");
      });
    } else {
      res.end("nothing expected");
    }
  } else {
    return res.end("Not matched any Link");
  }

  // res.end("Ehllo");
});

server.listen(8080);
