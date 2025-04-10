const N = +require("fs").readFileSync(0).toString();

function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

console.log(factorial(N));
