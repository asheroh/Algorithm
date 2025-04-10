//
let arr = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);
let sum = arr.reduce((a, c) => a + c);
console.log(sum / 5);
console.log(arr[2]);
