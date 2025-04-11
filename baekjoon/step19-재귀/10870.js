const N = +require("fs").readFileSync(0).toString();

function fibonacchi(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else return fibonacchi(num - 1) + fibonacchi(num - 2);
}

console.log(fibonacchi(N));
