//

let [N, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");
N = +N;

let hashmap = new Map();

let count = 0;
for (let idx = 1; idx < N; idx++) {
  if (input[idx] === "ENTER") hashmap = new Map();
  else {
    if (hashmap.has(input[idx])) continue;
    else {
      hashmap.set(input[idx], 1);
      count++;
    }
  }
}

console.log(count);
