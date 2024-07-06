//
const N = +require("fs").readFileSync(0).toString();

let result = 0;

for (i = 1; i * i <= N; i++) {
  result++;
}

console.log(result);
