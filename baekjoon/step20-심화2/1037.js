//
let [N, input] = require("fs").readFileSync(0).toString().split("\n");
input = input.split(" ").map(Number);
input.sort((a, b) => a - b);

console.log(input[0] * input[N - 1]);
