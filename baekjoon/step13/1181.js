//
let [N, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");
arr = new Set(arr);
arr = [...arr];
arr.sort();
arr.sort((a, b) => a.length - b.length);
console.log(arr.join("\n"));
