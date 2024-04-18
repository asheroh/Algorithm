//
let [x, y, w, h] = require("fs")
  .readFileSync(0)
  .toString()
  .split(" ")
  .map(Number);

function solution(x, y, w, h) {
  let distance = [x, y, w - x, h - y];

  console.log(Math.min(...distance));
}

solution(x, y, w, h);
