//
let [K, ...integers] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
integers = integers.map(Number);

const stack = [];

integers.forEach((integer) => {
  integer === 0 ? stack.pop() : stack.push(integer);
});

console.log(stack.reduce((a, c) => a + c, 0));
