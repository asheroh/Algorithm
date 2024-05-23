// 문제
// 모든 원소가 0 또는 1인 행렬이 있습니다. 1로 표시된 원소는 영역을 나타냅니다. 여기에서 상하좌우에 인접한 1은 같은 영역이라고 가정합니다. 각 영역의 크기는 1의 개수로 정의합니다. 주어진 N * N 크기의 행렬에서 영역의 개수와 각 영역의 크기를 오름차순으로 출력하세요.

// [입력]
// 1. 첫 번째 행은 행렬의 크기인 N입니다. N은 1 이상 10 이하의 자연수입니다.
// 2. 입력 두 번째 행부터는 공백으로 구분된 0과 1로 행렬이 주어집니다. 각 행은 개행문자(newline, \n)로 구분됩니다.

// [출력]
// 1. 첫 번째 행은 영역의 개수를 출력합니다.
// 2. 두 번째 행은 각 영역의 크기를 공백으로 구분하여 오름차순으로 출력합니다.
// 3. 한 행의 끝은 불필요한 공백 없이 개행 문자(newline, \n)로 끝나야 합니다.
// 4. 영역이 존재하지 않을 경우 영역 수 0으로 1행으로만 출력합니다.

// 예시 입/출력
// 입력1
// 6
// 0 1 1 0 0 0
// 0 1 1 0 1 1
// 0 0 0 0 1 1
// 0 0 0 0 1 1
// 1 1 0 0 1 0
// 1 1 1 0 0 0

// 출력 1
// 3
// 4 5 7
//
let [N, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");
arr = arr.map((e) => e.split(" ").map(Number));

function solution(N, arr) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const offset = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const sizes = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        const queue = [[i, j]];
        let size = 0;
        visited[i][j] = true;
        while (queue.length > 0) {
          const [curX, curY] = queue.shift();
          size++;
          for (const [dx, dy] of offset) {
            const nx = curX + dx;
            const ny = curY + dy;
            if (
              nx >= 0 &&
              nx < N &&
              ny >= 0 &&
              ny < N &&
              arr[nx][ny] === 1 &&
              !visited[nx][ny]
            ) {
              visited[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }
        sizes.push(size);
      }
    }
  }
  sizes.sort((a, b) => a - b);
  if (sizes.length === 0) {
    console.log(0);
  } else {
    console.log(sizes.length);
    console.log(sizes.join(" "));
  }
}

solution(+N, arr);
