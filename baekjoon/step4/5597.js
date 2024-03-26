// 문제
// X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.

// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

// 입력
// 입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.

// 출력
// 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// let wholeList = [];
// let attendanceList = [];
// let absentList = [];

// for (let i = 0; i < 30; i++) {
//   wholeList.push(Number(i + 1));
// }

// for (let i = 0; i < input.length; i++) {
//   attendanceList.push(Number(input[i]));
// }

// for (let i = 0; i < 30; i++) {
//   absentList = wholeList.filter((e) => !attendanceList.includes(e));
// }

// absentList.sort((a, b) => a - b);

// let A = absentList[0];
// let B = absentList[1];

// console.log(A);
// console.log(B);

let N = require("fs").readFileSync(0).toString().split("\n").map(Number);

let x = []; // 1에서 30까지 없는 숫자 넣기 위한 배열

for (let i = 1; i < 31; i++) {
  if (N.includes(i)) continue; // 1-30까지 숫자 있는지 확인 (있으면 continue로 다음 넘어가지 않고 반복)
  x.push(i); // 없다면 해당 인덱스 배열 x에 push
}

x.sort((a, b) => a - b); // 오름차순으로 정렬
console.log(`${x[0]}\n${x[1]}`); // 출력
