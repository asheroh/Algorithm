//
let [NM, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);

const D = new Set(),
  B = new Set();

for (let i = 0; i < N; i++) {
  D.add(input[i]);
}

for (let i = N; i < N + M; i++) {
  B.add(input[i]);
}
let answer = [];

D.forEach((e) => {
  if (B.has(e)) answer.push(e);
});

answer = answer.sort();

console.log(answer.length);
console.log(answer.join("\n"));
