//
let [N, input] = require("fs").readFileSync(0).toString().trim().split("\n");
N = +N;
const numbering = input.split(" ").map(Number);

const stack = []; // 보조 공간(스택)
let expected = 1; // 현재 간식을 받을 수 있는 번호

for (const num of numbering) {
  if (num === expected) {
    expected++; // 순서 맞으면 바로 간식 받기
  } else {
    stack.push(num); // 아니면 스택에 보관
  }

  // 스택에서 꺼낼 수 있는 동안 반복해서 pop
  while (stack.length > 0 && stack[stack.length - 1] === expected) {
    stack.pop();
    expected++;
  }
}

// 최종적으로 expected가 N+1이면 모든 사람이 순서대로 간식을 받았다는 의미
console.log(expected === N + 1 ? "Nice" : "Sad");
