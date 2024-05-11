//
let [N, ...coordinates] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
coordinates = coordinates.map((e) => e.split(" ").map(Number));

function solution(N, coordinates) {
  coordinates.sort((a, b) => a[0] - b[0]);
  coordinates.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
  });
  coordinates = coordinates.map((coordinate) => coordinate.join(" "));
  console.log(coordinates.join("\n"));
}
solution(+N, coordinates);
