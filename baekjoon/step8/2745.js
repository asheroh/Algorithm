// 문제
// B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.

// 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.

// A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

// 입력
// 첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)

// B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.

// 출력
// 첫째 줄에 B진법 수 N을 10진법으로 출력한다.

// let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

// let [char, base] = input;

// char = char.split("").reverse();

// let answer = 0;

// for (let i = 0; i < char.length; i++) {
//   if (char[i] >= "A" && char[i] <= "Z") {
//     let alphabet = char[i].charCodeAt(0) - 55;
//     answer += alphabet * Math.pow(base, i);
//   } else {
//     answer += char[i] * Math.pow(base, i);
//   }
// }

// console.log(answer);

// 숏코딩
const [num, form] = require("fs").readFileSync(0).toString().trim().split(" ");

let ans = parseInt(num, form);

console.log(ans);
