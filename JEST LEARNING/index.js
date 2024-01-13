// function sum(a, b) {
//   if (arguments.length === 0) {
//     return "Sum function invoked without arguments";
//   }
//   if (arguments.length === 1) {
//     return "Sum function need atleast 2 arguments";
//   }
//   let c = Number(a);
//   let d = Number(b);
//   return Number((c + d).toFixed(1));
// }

function sum(...args) {
  if (arguments.length === 0) {
    return "Sum function invoked without arguments";
  }
  if (arguments.length === 1) {
    return "Sum function need atleast 2 arguments";
  }

  const sumValue = [...args].reduce((a, c) => a + Number(c), 0);

  return Number(sumValue.toFixed(1));
}

module.exports = sum;
