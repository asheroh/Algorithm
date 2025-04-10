//
let [N, spots] = require("fs").readFileSync(0).toString().split("\n");

spots = spots.split(" ").map(Number);

let sortedSpots = [...new Set(spots)].sort((a, b) => a - b);

let compressedMap = new Map();
sortedSpots.forEach((value, index) => {
  compressedMap.set(value, index);
});

let answer = spots.map((spot) => compressedMap.get(spot));

console.log(answer.join(" "));
