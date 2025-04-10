//
const [A, B] = require("fs").readFileSync(0).toString().split(" ").map(Number);

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (A * B) / gcd(A, B);
console.log(lcm);

// let a = A;
// let b = B;

// // 서로가 나눠 떨어지는 경우
// if (A % B === 0) console.log(A);
// else if (B % A === 0) console.log(B);
// // 서로가 나눠 떨어지지 않는 경우
// else {
//   while (1) {
//     if (a === a % b && b === b % a) {
//       console.log(a * b);
//       break;
//     }
//     if (a % b === 0 || b % a === 0) {
//       if (a > b) console.log((A * B) / b);
//       else console.log((A * B) / a);
//       break;
//     }
//     if (a > b) {
//       a = a % b;
//     } else {
//       b = b % a;
//     }
//   }
// }
