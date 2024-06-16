//
let [AB, arrA, arrB] = require("fs").readFileSync(0).toString().split("\n");
arrA = arrA.split(" ").map(Number);
arrB = arrB.split(" ").map(Number);

let arr = arrA.concat(arrB);
let set = new Set(arr);
let setA = new Set(arrA);
let setB = new Set(arrB);

let count = 0;

set.forEach((e) => {
  if (!setA.has(e)) count++;
  if (!setB.has(e)) count++;
});

console.log(count);
