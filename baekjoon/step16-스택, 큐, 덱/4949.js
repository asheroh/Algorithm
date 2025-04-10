//
let input = require("fs").readFileSync(0).toString().trim().split("\n");

input.forEach((line) => {
  if (line === ".") return; // 종료 조건
  let stack = [];
  let isBalanced = true;

  for (let char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        isBalanced = false;
        break;
      }
    } else if (char === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        isBalanced = false;
        break;
      }
    }
  }

  if (isBalanced && stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
