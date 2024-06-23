//
const [N, ...trees] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

let gap = [];

for (let i = 1; i < N; i++) {
  gap.push(trees[i] - trees[i - 1]);
}

let gcdNum = gap[0];
for (let j = 1; j < gap.length; j++) {
  gcdNum = gcd(gcdNum, gap[j]);
}

let count = 0;
gap.forEach((e) => {
  count += Math.floor(e / gcdNum - 1);
});

console.log(count);
