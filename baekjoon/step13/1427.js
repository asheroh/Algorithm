//
let N = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a);
console.log(N.join(""));
