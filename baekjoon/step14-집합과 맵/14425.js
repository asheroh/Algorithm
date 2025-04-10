//
let [NM, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

let [N, M] = NM.split(" ").map(Number);

let S = [],
  inspectation = [];

for (let i = 0; i < N; i++) {
  S.push(input[i]);
}

for (let i = N; i < N + M; i++) {
  inspectation.push(input[i]);
}

S = new Set(S);

let answer = 0;
inspectation.forEach((e) => {
  if (S.has(e)) answer++;
});

console.log(answer);
