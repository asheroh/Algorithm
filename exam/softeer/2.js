//
let input = require("fs").readFileSync(0).toString().trim().split(" ");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const order = input[0] === "encrypt" ? true : false;
let secretKey = input[1].split("");
let rotate = +input[2];
let message = input[3].split("");

// secretkey 숫자 변환
let numSecretKey = secretKey.map((e) => alphabet.indexOf(e));

// message 숫자 변환
let numMessage = message.map((e) => alphabet.indexOf(e));

if (order) {
  // 비밀키와 메시지 합
  let sum = [];
  for (let i = 0; i < 30; i++) {
    if (numSecretKey[i] && numMessage[i]) {
      let calc = numSecretKey[i] + numMessage[i];
      if (calc > 26) calc -= 26;
      sum.push(calc);
    }
  }

  // 로테이트만큼 좌측 회전
  let rotateSum = [];
  for (let j = 0; j < sum.length; j++) {
    let newIdx = 0;
    newIdx = j + rotate;
    if (newIdx >= sum.length) newIdx -= sum.length;
    rotateSum[j] = sum[newIdx];
  }

  let answer = rotateSum.map((e) => alphabet[e]).join("");

  console.log(answer);
} else {
  // Decript
  let rotateMessage = [];
  for (let j = 0; j < numMessage.length; j++) {
    let newIdx = 0;
    newIdx = j - rotate;
    if (newIdx < 0) newIdx += numMessage.length;
    rotateMessage[j] = numMessage[newIdx];
  }
  let target = [];
  for (let i = 0; i < 30; i++) {
    if (numSecretKey[i] && rotateMessage[i]) {
      let calc = rotateMessage[i] - numSecretKey[i];
      if (calc < 0) calc += 26;
      target.push(calc);
    }
  }
  let answer = target.map((e) => alphabet[e]);
  console.log(answer.join(""));
}
