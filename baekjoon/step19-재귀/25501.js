let [T, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");

let count = 0;
function recursion(s, l, r) {
  count++;
  if (l >= r) return 1;
  else if (s.charAt(l) !== s.charAt(r)) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  count = 0;
  return recursion(s, 0, s.length - 1);
}

input.forEach((str) => {
  const returnValue = isPalindrome(str);
  console.log(returnValue, count);
});
