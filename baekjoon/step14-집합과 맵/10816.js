//
let [N, cards, M, integers] = require("fs")
  .readFileSync(0)
  .toString()
  .split("\n");

cards = cards.split(" ").map(Number);
integers = integers.split(" ").map(Number);

const map = new Map();

cards.forEach((e) => {
  if (map.has(e)) map.set(e, map.get(e) + 1);
  else map.set(e, 1);
});

const answer = [];
integers.forEach((e) => answer.push(map.get(e) || 0));
console.log(answer.join(" "));
