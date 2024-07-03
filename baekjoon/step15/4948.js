//
let [...testcases] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
testcases.pop();

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (const n of testcases) {
  let count = 0;
  for (let i = n + 1; i <= n * 2; i++) {
    if (isPrime(i)) count++;
  }
  console.log(count);
}
