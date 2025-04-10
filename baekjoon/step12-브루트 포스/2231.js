//
let N = +require("fs").readFileSync(0).toString().trim();

function solution(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    let decomp = i.toString().split("").map(Number);
    let sum = decomp.reduce((a, c) => a + c) + i;
    if (sum === N) {
      answer = i;
      break;
    }
  }
  console.log(answer);
}

solution(N);
