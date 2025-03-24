//
const N = +require("fs").readFileSync(0).toString();

const dp = Array.from({ length: 13 }, () => 0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = i * dp[i - 1];
}

console.log(dp[N]);
