//
let [T, ...testcases] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

testcases = testcases.map(Number);

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let target of testcases) {
  while (!isPrime(target)) target++;
  console.log(target);
}
