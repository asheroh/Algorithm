//
const [N, K] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function josephus(N, K) {
  let result = [];
  let queue = [];

  // 1부터 N까지의 숫자를 큐에 넣습니다.
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  let index = 0;

  // 큐에서 K번째 사람을 제거하고 결과 배열에 넣습니다.
  while (queue.length > 0) {
    index = (index + (K - 1)) % queue.length; // index를 K-1만큼 이동
    result.push(queue.splice(index, 1)[0]); // 그 위치의 요소를 제거하여 result에 추가
  }

  return `<${result.join(", ")}>`;
}

console.log(josephus(N, K));
