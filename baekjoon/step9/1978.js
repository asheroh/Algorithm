// 문제
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 입력
// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

// 출력
// 주어진 수들 중 소수의 개수를 출력한다.

let [N, arr] = require("fs").readFileSync(0).toString().trim().split("\n");

arr = arr.split(" ").map(Number);

function solution(N, arr) {
  let answer = 0;

  arr.forEach((target) => {
    let divisor = [];
    for (let i = 1; i <= target; i++) {
      if (target % i === 0) divisor.push(i);
    }
    if (divisor.length === 2) answer++;
  });

  console.log(answer);
}

solution(N, arr);
