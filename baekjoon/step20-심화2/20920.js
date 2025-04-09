//
const [NM, ...words] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);

words.sort();
words.sort((a, b) => b.length - a.length);

const wordCount = {};
for (let word of words) {
  if (word.length < M) continue;
  if (wordCount[word]) wordCount[word]++;
  else wordCount[word] = 1;
}

const wordMap = Object.entries(wordCount);
wordMap.sort(([word1, num1], [word2, num2]) => num2 - num1);

const result = [];
wordMap.forEach(([word, _]) => {
  result.push(word);
});

console.log(result.join("\n"));
