//
let [T, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");
arr = arr.map((e) => e.split(" ").map(Number));

function solution() {
  arr.forEach((e) => {
    let divider = [];
    for (let i = 1; i <= 45000; i++) {
      if (e[0] % i === 0 && e[1] % i === 0) {
        divider.push(i);
      }
    }
    const maxDivder = divider[divider.length - 1];
    console.log((e[0] * e[1]) / maxDivder);
  });
}

solution(+T, arr);
