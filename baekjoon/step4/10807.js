// 문제
// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 정수가 공백으로 구분되어져있다. 셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

// 출력
// 첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const integers = input[1].split(" ").map(Number);
const v = parseInt(input[2]);
let count = 0;

integers.forEach((p) => {
  if (N == integers.length) {
    p == v ? count++ : count;
  } else {
    count = -1;
  }
});

console.log(count == -1 ? "v 입력 개수가 N과 일치하지 않습니다." : count);
