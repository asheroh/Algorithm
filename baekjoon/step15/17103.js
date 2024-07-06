//
let [T, ...testcases] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX_NUM = 1000000;

const isPrime = Array.from({ length: MAX_NUM + 1 }, () => true);
isPrime.fill(false, 0, 2);
for (let i = 2; i <= Math.sqrt(MAX_NUM); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX_NUM; j += i) {
      isPrime[j] = false;
    }
  }
}

testcases.forEach((N) => {
  let count = 0;
  for (let i = 2; i <= N / 2; i++) {
    if (isPrime[i] && isPrime[N - i]) {
      count++;
    }
  }
  console.log(count);
});
