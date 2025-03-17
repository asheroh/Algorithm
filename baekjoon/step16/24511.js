//
let [N, A, B, M, C] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

N = +N;
M = +M;

A = A.split(" ").map(Number);
B = B.split(" ").map(Number);
C = C.split(" ").map(Number);

const newB = B.filter((e, idx) => A[idx] === 0);
const answer = [...C.reverse(), ...newB].splice(-M, M).reverse();

console.log(answer.join(" "));

// // 2) "큐"만 골라서 덱에 넣기
// //    A[i] = 0 -> 큐, 1 -> 스택
// const queueValues = [];
// for (let i = 0; i < N; i++) {
//   if (A[i] === 0) {
//     queueValues.push(B[i]);
//   }
// }

// // 만약 큐가 하나도 없으면 => 모든 자료구조가 스택이므로
// // 삽입값이 그대로 결과가 된다.
// if (queueValues.length === 0) {
//   console.log(C.join(" "));
//   process.exit(0);
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class Deque {
//   constructor(arr = []) {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;

//     // 초기 배열을 덱 뒤쪽부터 차례대로 연결
//     for (const val of arr) {
//       this.pushBack(val);
//     }
//   }

//   pushBack(value) {
//     const node = new Node(value);
//     if (!this.tail) {
//       this.head = this.tail = node;
//     } else {
//       node.prev = this.tail;
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//   }

//   popBack() {
//     if (!this.tail) return undefined;
//     const val = this.tail.value;
//     this.size--;
//     if (this.head === this.tail) {
//       this.head = this.tail = null;
//     } else {
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//     }
//     return val;
//   }

//   pushFront(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//     }
//     this.size++;
//   }
// }

// const dq = new Deque(queueValues);

// const answer = new Array(M);
// for (let i = 0; i < M; i++) {
//   const popped = dq.popBack();
//   answer[i] = popped;
//   dq.pushFront(C[i]);
// }

// console.log(answer.join(" "));
