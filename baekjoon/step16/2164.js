//
const N = +require("fs").readFileSync(0).toString().trim();

let count = 0;
const stack = Array.from({ length: N }, () => {
  count++;
  return count;
});

let idx = 0;
while (idx < stack.length) {
  if (stack.length === idx) break;
  idx++;
  if (stack.length === idx) break;
  const top = stack[idx];
  stack.push(top);
  idx++;
}

console.log(stack[stack.length - 1]);
