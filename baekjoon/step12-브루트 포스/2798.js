//
let input = require("fs").readFileSync(0).toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);

function solution(N, M, cards) {
  let max = 0;
  // 3장의 카드를 골라야 하기 때문에 i, j, k 3개의 index를 써서 for loop을 돈다
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        // 서로 다른 카드가 선택된 경우 M을 초과하지 않는 최대값인지 확인 후 저장한다.
        const sum = cards[i] + cards[j] + cards[k];
        if (sum > max && sum <= M) {
          max = sum;
        }

        // 규칙에 맞는 숫자가 나온 경우에 더이상 계산을 할 필요가 없기 떄문에 종료한다.
        if (max == M) {
          break;
        }
      }
    }
  }

  console.log(max);
}

solution(N, M, cards);
