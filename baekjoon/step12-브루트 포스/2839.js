//
let N = +require("fs").readFileSync(0).toString();

function solution(N) {
  let dp = new Array(N + 1).fill(Infinity);
  // dp 배열 초기화
  dp[0] = 0;

  // 각 무게에 대해 최소 봉지 개수 계산
  for (let i = 3; i <= N; i++) {
    // 3kg 봉지 사용
    if (i - 3 >= 0) {
      dp[i] = Math.min(dp[i], dp[i - 3] + 1);
    }
    // 5kg 봉지 사용
    if (i - 5 >= 0) {
      dp[i] = Math.min(dp[i], dp[i - 5] + 1);
    }
  }

  // Nkg를 만들 수 없는 경우 -1 반환, 아니면 최소 봉지 개수 반환
  return dp[N] === Infinity ? -1 : dp;
}

console.log(solution(N));
