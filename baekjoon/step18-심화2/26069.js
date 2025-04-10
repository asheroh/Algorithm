//

let [N, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");
N = +N;
input = input.map((e) => e.split(" "));

const dancingPeople = new Set();
dancingPeople.add("ChongChong");

for (let idx = 0; idx < N; idx++) {
  const [name1, name2] = input[idx];
  if (dancingPeople.has(name1)) dancingPeople.add(name2);
  else if (dancingPeople.has(name2)) dancingPeople.add(name1);
}

console.log(dancingPeople.size);
