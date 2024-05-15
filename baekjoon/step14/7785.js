//
let [n, ...records] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

records = records.map((e) => e.split(" "));

let el = new Map();

records.forEach((record) => {
  if (record[1] === "enter") {
    el.set(record[0], record[1]);
  } else {
    el.delete(record[0]);
  }
});
// console.log([...el.keys()]);

console.log([...el.keys()].sort().reverse().join("\n"));
