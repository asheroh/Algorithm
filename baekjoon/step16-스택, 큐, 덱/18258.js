//
let [N, ...orders] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const queue = [];
const result = [];

let head = 0;
let tail = 0;

orders.forEach((order) => {
  const [name, num] = order.split(" ");
  switch (name) {
    case "push":
      queue[tail++] = num;
      break;
    case "pop":
      if (tail > head) result.push(queue[head++]);
      else result.push(-1);
      break;
    case "size":
      result.push(tail - head);
      break;
    case "empty":
      if (tail === head) result.push(1);
      else result.push(0);
      break;
    case "front":
      if (tail > head) result.push(queue[head]);
      else result.push(-1);
      break;
    case "back":
      if (tail > head) result.push(queue[tail - 1]);
      else result.push(-1);
      break;
    default:
      break;
  }
});

console.log(result.join("\n"));
