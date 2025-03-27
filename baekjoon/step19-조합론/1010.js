//

let [T, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");
T = +T;

function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

function combination(m, n) {
  return factorial(m) / (factorial(n) * factorial(m - n));
}

const result = [];

for (let i = 0; i < T; i++) {
  const [N, M] = input[i].split(" ").map(Number);
  result.push(Math.round(combination(M, N)));
}

console.log(result.join("\n"));
