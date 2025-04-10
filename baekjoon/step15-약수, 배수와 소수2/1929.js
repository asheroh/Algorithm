//
const [M, N] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let prime = Array.from({ length: N + 1 }, () => true);
prime.fill(false, 0, 2);
console.log(prime);
for (let i = 2; i <= Math.sqrt(N); i++) {
  if (prime[i]) {
    for (let j = i * i; j <= N; j += i) {
      prime[j] = false;
    }
  }
}

for (let target = M; target <= N; target++) {
  if (prime[target] === true) console.log(target);
}
