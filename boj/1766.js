/**
 * 진입차수가 0인 노드를 큐에 넣는다.
 *
 * 큐가 빌 때까지 다음의 과정을 반복한다.
 * ① 큐에서 원소를 꺼내 해당 노드에서 나가는 간선을 그래프에서 제거
 * ② 새롭게 진입차수가 0이 된 노드를 큐에 삽입
 * */

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(val) {
    this.heap.push(val);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[currentIndex].node < this.heap[parentIndex].node) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const val = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[leftIndex] && this.heap[currentIndex].node > this.heap[leftIndex].node ||
      this.heap[rightIndex] && this.heap[currentIndex].node > this.heap[rightIndex].node
      ) {
      if (this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex].node > this.heap[rightIndex].node) {
        this._swap(currentIndex, rightIndex);
        currentIndex = rightIndex;
      } else if (this.heap[leftIndex].node <= this.heap[rightIndex].node) {
        this._swap(currentIndex, leftIndex);
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return val;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(input) {
  const [n, m] = input[0];
  const heap = new MinHeap();
  let degrees = Array.from({ length: n + 1 }, (_, i) => ({ node: i, inDegree: 0, nexts: [] }));
  const result = [];
  degrees[0] = null;

  for (let i = 1; i <= m; i++) {
    const [s, e] = input[i];
    degrees[e].inDegree++;
    degrees[s].nexts.push(e);
  }

  const zeros = degrees.filter(v => v && v.inDegree === 0);
  zeros.forEach((zero) => {
    zero.inDegree--;
    heap.push(zero);
  });

  while (!heap.isEmpty()) {
    // console.log(heap);
    const { node, nexts } = heap.pop();
    result.push(node);
    nexts.forEach((next) => {
      if (degrees[next]) {
        degrees[next].inDegree--;
        if (degrees[next].inDegree === 0) heap.push(degrees[next]);
      }
    });
  }

  console.log(result.join(' '));
}

// solution([
//   [6, 7],
//   [5, 6],
//   [5, 2],
//   [2, 4],
//   [4, 3],
//   [2, 1],
//   [6, 1],
//   [1, 3],
// ])

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];

rl.on('line', (line) => {
  input.push(line.split(" ").map(v => Number(v)));
}).on('close', () => {
  solution(input)
  process.exit();
});
