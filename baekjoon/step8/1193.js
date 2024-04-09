// 문제
// 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

// 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

// X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

// 출력
// 첫째 줄에 분수를 출력한다.

let X = require("fs").readFileSync(0).toString().trim();
X = parseInt(X);

let line = 1;

while (true) {
  X -= line;
  if (X <= 0) {
    X += line;
    break;
  }
  line++;
}

if (line % 2 === 1) {
  console.log(`${line - (X - 1)}/${1 + (X - 1)}`);
} else {
  console.log(`${1 + (X - 1)}/${line - (X - 1)}`);
}
