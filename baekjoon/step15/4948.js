//
let [...testcases] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
testcases.pop();

// 에라토스테네스의 체
for (const n of testcases) {
  let prime = Array.from({ length: n * 2 + 1 }, () => true);
  prime.fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(n * 2); i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n * 2; j += i) {
        prime[j] = false;
      }
    }
  }
  let count = 0;
  for (let i = n + 1; i <= n * 2; i++) {
    if (prime[i]) count++;
  }
  console.log(count);
}

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// for (const n of testcases) {
//   let count = 0;
//   for (let i = n + 1; i <= n * 2; i++) {
//     if (isPrime(i)) count++;
//   }
//   console.log(count);
// }
