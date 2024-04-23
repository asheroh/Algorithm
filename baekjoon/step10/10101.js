//
let angle = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(angle) {
  let answer = "";
  if (angle[0] + angle[1] + angle[2] === 180) {
    if (angle[0] === angle[1] && angle[1] === angle[2]) answer = "Equilateral";
    else if (
      angle[0] !== angle[1] &&
      angle[1] !== angle[2] &&
      angle[0] !== angle[2]
    )
      answer = "Scalene";
    else answer = "Isosceles";
  } else {
    answer = "Error";
  }

  console.log(answer);
}

solution(angle);
