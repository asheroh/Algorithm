//
let [numbers1, numbers2] = require("fs").readFileSync(0).toString().split("\n");
const [A0, A] = numbers1.split(" ").map(Number);
const [B0, B] = numbers2.split(" ").map(Number);

let a = A;
let b = B;

let a0 = A0;
let b0 = B0;

let a0b0 = A0 * B0;
let ab = A * B;

// 유클리드 호제법 최대공약수
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

if (gcd(A, B) === 1) {
  console.log(A0 * B + B0 * A, ab);
} else {
  // 분모가 최대공약수와 같을 경우
  if (A === gcd(A, B) || B === gcd(A, B)) {
    if (A > B) {
      console.log(A0 + B0 * B0 * (A / B), A);
    } else {
      console.log(B0 + A0 * A0 * (B / A), B);
    }
  } else {
    // 분모 둘 다 최대공약수와 다를 경우
    console.log((A0 * B + B0 * A) / maxDivider, (A * B) / maxDivider);
  }
}
