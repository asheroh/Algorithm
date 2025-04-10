//
let [N, ...coordinates] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
coordinates = coordinates.map((e) => e.split(" ").map(Number));

function solution(N, coordinates) {
  coordinates.sort((a, b) => a[1] - b[1]);
  coordinates.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
  });
  coordinates = coordinates.map((coordinate) => coordinate.join(" "));
  console.log(coordinates.join("\n"));
}
solution(+N, coordinates);
