// 문제 : 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
// 입력 : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a - b);

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("두 정수 A와 B를 입력하세요: ", (input) => {
//   const [A, B] = input.split(" ").map(Number);

//   if (A > 0 && A < 10 && B > 0 && B < 10) {
//     console.log(A - B);
//   } else {
//     console.log("입력이 올바르지 않습니다.");
//   }

//   rl.close();
// });
