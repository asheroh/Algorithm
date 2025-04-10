//
let S = require("fs").readFileSync(0).toString().trim();

let result = new Set();
for (let i = 0; i <= S.length; i++) {
  for (let j = i; j <= S.length; j++) {
    if (i === j) continue;
    result.add(S.slice(i, j));
  }
}
console.log(result.size);
