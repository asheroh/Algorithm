//
let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

let x = input.map((v) => v[0]).sort((a, b) => a - b);
let y = input.map((v) => v[1]).sort((a, b) => a - b);

function solution(x, y) {
  x = x[0] === x[1] ? x[2] : x[0];
  y = y[0] === y[1] ? y[2] : y[0];

  console.log(x, y);
}
solution(x, y);
