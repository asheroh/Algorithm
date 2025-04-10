//
let [a, b, c, d, e, f] = require("fs")
  .readFileSync(0)
  .toString()
  .split(" ")
  .map(Number);

function solution(a, b, c, d, e, f) {
  let targetX = 0,
    targetY = 0;
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        targetX = x;
        targetY = y;
        break;
      }
    }
  }
  console.log(targetX, targetY);
}

solution(a, b, c, d, e, f);
