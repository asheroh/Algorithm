//
let [N, ...commands] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

commands = commands.map((e) => e.split(" ").map(Number));

const stack = [];
const output = [];

commands.forEach((command) => {
  switch (command[0]) {
    case 1:
      stack.push(command[1]);
      break;
    case 2:
      if (stack.length !== 0) {
        output.push(stack[stack.length - 1]);
        stack.pop();
      } else {
        output.push(-1);
      }
      break;
    case 3:
      output.push(stack.length);
      break;
    case 4:
      if (stack.length === 0) {
        output.push(1);
      } else {
        output.push(0);
      }
      break;
    case 5:
      if (stack.length !== 0) {
        output.push(stack[stack.length - 1]);
      } else {
        output.push(-1);
      }
      break;
    default:
      break;
  }
});

console.log(output.join("\n"));
