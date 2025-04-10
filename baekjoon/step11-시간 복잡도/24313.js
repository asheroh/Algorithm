//
let [arr, c, n0] = require("fs").readFileSync(0).toString().split("\n");
let [a, b] = arr.split(" ").map(Number);

console.log(+(b <= (c - a) * n0 && c >= a));
