//
const N = +require("fs").readFileSync(0).toString().trim();

let power = 1 << Math.floor(Math.log2(N));

console.log(N === power ? N : (N - power) * 2);
