//
let [N, ...members] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
members = members.map((e) => e.split(" "));

members.sort((a, b) => {
  return Number(a[0]) - Number(b[0]);
});

members = members.map((e) => e.join(" "));

console.log(members.join("\n"));
