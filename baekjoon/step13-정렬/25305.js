//
let [Nk, grades] = require("fs").readFileSync(0).toString().split("\n");
let [N, k] = Nk.split(" ").map(Number);
grades = grades
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(grades[k - 1]);
