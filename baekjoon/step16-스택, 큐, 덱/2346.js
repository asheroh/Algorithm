//
let [N, numbers] = require("fs").readFileSync(0).toString().split("\n");
N = +N;
numbers = numbers.split(" ").map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  push_back(value) {
    const node = new Node(value);
    if (!this.back) {
      this.front = this.back = node;
    } else {
      node.prev = this.back;
      this.back.next = node;
      this.back = node;
    }
    this.size++;
  }

  pop_front() {
    if (!this.front) return null;
    const value = this.front.value;
    this.front = this.front.next;
    if (this.front) this.front.prev = null;
    else this.back = null;
    this.size--;
    return value;
  }

  rotate_left(count) {
    for (let i = 0; i < count; i++) {
      this.push_back(this.pop_front());
    }
  }

  rotate_right(count) {
    for (let i = 0; i < count; i++) {
      this.push_back(this.pop_front());
    }
  }
}

const deque = new Deque();
numbers.forEach((number, index) => {
  deque.push_back([index + 1, number]);
});

const result = [];

while (deque.size) {
  const [index, move] = deque.pop_front();
  result.push(index);

  if (deque.size) {
    if (move > 0) {
      deque.rotate_left(move - 1);
    } else {
      deque.rotate_right(-move);
    }
  }
}

console.log(result.join(" "));
