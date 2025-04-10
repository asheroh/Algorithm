//
let n = BigInt(require("fs").readFileSync(0).toString());
let count = (n * (n - 1n) * (n - 2n)) / 6n;

console.log(count.toString());
console.log(3);
