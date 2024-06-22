//
let [numbers1, numbers2] = require("fs").readFileSync(0).toString().split("\n");
const [A0, A] = numbers1.split(" ").map(Number);
const [B0, B] = numbers2.split(" ").map(Number);

// 유클리드 호제법 최대공약수
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

let a0b0 = A0 * B + B0 * A;
let ab = A * B;

let divisor = gcd(a0b0, ab);

console.log(a0b0 / divisor, ab / divisor);
