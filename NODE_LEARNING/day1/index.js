const { isUtf8 } = require("buffer");
const x = require("fs");
console.log(x);
console.log(x.readFileSync("./test.txt", { encoding: "utf-16le" }));

const { writeFileSync } = require("fs");

writeFileSync("./written.txt", "hello written", { encoding: "utf-8" });
