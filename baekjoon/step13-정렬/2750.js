//
let [N, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");
arr = arr.map(Number).sort((a, b) => a - b);
console.log(arr.join("\n"));
