//
const [N, K] = require("fs").readFileSync(0).toString().split(" ").map(Number);

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

const result = factorial(N) / (factorial(N - K) * factorial(K));
console.log(result);
