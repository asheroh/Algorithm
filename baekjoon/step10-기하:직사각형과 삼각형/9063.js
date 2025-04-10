//
let [N, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");

arr = arr.map((e) => e.split(" ").map(Number));

function solution(N, arr) {
  let x = [];
  let y = [];

  arr.forEach((e) => {
    x.push(e[0]);
    y.push(e[1]);
  });
  let minX = Math.min(...x);
  let maxX = Math.max(...x);
  let minY = Math.min(...y);
  let maxY = Math.max(...y);
  let width = Math.abs(maxX - minX);
  let height = Math.abs(maxY - minY);

  console.log(width * height);
}

solution(N, arr);
