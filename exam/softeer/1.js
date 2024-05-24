// 2 9 10 21 24
const numbers = require("fs").readFileSync(0).toString().trim().split(" ");

// 조건에 맞지 않는 입력 처리
if (numbers.length > 9) {
  console.log(-1);
  process.exit();
}

const allTwoDigits = numbers.every((num) => num.length <= 2);
const allThreeDigits = numbers.every((num) => num.length <= 3);

if (!allTwoDigits && !allThreeDigits) {
  console.log(-1);
  process.exit();
}

// 가장 큰 수 만들기
const largest = numbers
  .slice()
  .sort((a, b) => b + a - (a + b))
  .join("");

// 가장 작은 수 만들기
const smallest = numbers
  .slice()
  .sort((a, b) => a + b - (b + a))
  .join("");

// 결과 출력
const result = BigInt(largest) + BigInt(smallest);
console.log(result.toString());
