//
let [N, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");
N = +N;
input = input.map(Number);

function calc1() {
  const sum = input.reduce((acc, cur) => acc + cur, 0);
  return Math.round(sum / N);
}

function calc2() {
  const sorted = [...input].sort((a, b) => a - b);
  const mid = Math.floor(N / 2);
  return N % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function calc3() {
  const count = {};
  for (const num of input) {
    count[num] = (count[num] || 0) + 1;
  }
  const maxCount = Math.max(...Object.values(count));

  const mostFrequent = Object.entries(count)
    .filter(([_, c]) => c === maxCount)
    .map(([num]) => Number(num))
    .sort((a, b) => a - b);

  return mostFrequent.length > 1 ? mostFrequent[1] : mostFrequent[0];
}

function calc4() {
  const min = Math.min(...input);
  const max = Math.max(...input);
  return max - min;
}

const result = [calc1(), calc2(), calc3(), calc4()];

console.log(result.join("\n"));
