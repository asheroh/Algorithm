//

// Linked List 기반 Deque 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  push_front(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = this.back = node;
    } else {
      node.next = this.front;
      this.front.prev = node;
      this.front = node;
    }
    this.size++;
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
    if (!this.front) return -1;
    const value = this.front.value;
    this.front = this.front.next;
    if (this.front) this.front.prev = null;
    else this.back = null;
    this.size--;
    return value;
  }

  pop_back() {
    if (!this.back) return -1;
    const value = this.back.value;
    this.back = this.back.prev;
    if (this.back) this.back.next = null;
    else this.front = null;
    this.size--;
    return value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  getFront() {
    return this.front ? this.front.value : -1;
  }

  getBack() {
    return this.back ? this.back.value : -1;
  }
}

let [N, ...orders] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const deque = new Deque();
const result = [];

orders.forEach((command) => {
  const [op, value] = command.split(" ").map(Number);

  switch (op) {
    case 1:
      deque.push_front(value);
      break;
    case 2:
      deque.push_back(value);
      break;
    case 3:
      result.push(deque.pop_front());
      break;
    case 4:
      result.push(deque.pop_back());
      break;
    case 5:
      result.push(deque.getSize());
      break;
    case 6:
      result.push(deque.isEmpty());
      break;
    case 7:
      result.push(deque.getFront());
      break;
    case 8:
      result.push(deque.getBack());
      break;
  }
});

console.log(result.join("\n"));
