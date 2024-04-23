//
let [a, b, c] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(a, b, c) {
  let arr = [a, b, c];
  arr.sort((a, b) => a - b);

  while (arr[0] + arr[1] <= arr[2]) {
    arr[2]--;
  }

  console.log(arr.reduce((a, c) => a + c));
}

solution(a, b, c);
