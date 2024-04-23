//
let lengths = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
lengths.pop();

function solution(lengths) {
  lengths.forEach((e) => {
    e.sort((a, b) => a - b);
    // 삼각형 조건
    if (e[0] + e[1] > e[2]) {
      // 세 변 다 같을 때
      if (e[0] === e[2]) console.log("Equilateral");
      // 세 변 모두 다를 때
      else if (e[0] !== e[1] && e[1] !== e[2]) console.log("Scalene");
      // 두 변의 길이만 같을 때
      else console.log("Isosceles");
    } else console.log("Invalid");
  });
}

solution(lengths);
