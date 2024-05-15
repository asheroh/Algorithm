//
let [N, cards, M, compCards] = require("fs")
  .readFileSync(0)
  .toString()
  .split("\n");

cards = new Set(cards.split(" ").map(Number));
compCards = compCards.split(" ").map(Number);

let answer = [];
compCards.forEach((card) => {
  answer.push(cards.has(card) ? 1 : 0);
});

console.log(answer.join(" "));
