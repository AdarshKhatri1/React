console.log("Hello");

const sum = require("./sum");
console.log(sum(3, 4));

// const { add, sub, mul, div } = require("./Calc"); // in case of object export name matter
const [add, sub, mul, div] = require("./Calc"); // in case of array export order matter
// const [a, b, c, d] = require("./Calc"); // in case of array export order matter not name

console.log(add(2, 3));
console.log("sub", sub(4, 3));
console.log("mul", mul(2, 3));
console.log("div", div(6, 3));
