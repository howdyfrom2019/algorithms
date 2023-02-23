function solution(n, roads, sources, destination) {
  const dp = Array.from({ length: n + 1 }, () => Infinity);
  const roadMap = new Map();
  dp[destination] = 0;

  for (let i = 1; i <= n; i++) roadMap.set(i, []);
  roads.forEach(([s, e]) => {
    roadMap.get(s).push(e);
    roadMap.get(e).push(s);
  });

  const queue = new Queue();
  queue.enqueue(destination);

  while (!queue.isEmpty()) {
    const key = queue.dequeue();

    for (const node of roadMap.get(key)) {
      if (dp[node] > dp[key] + 1) {
        dp[node] = dp[key] + 1;
        queue.enqueue(node);
      }
    }
  }

  return sources.map(v => dp[v] === Infinity ? -1 : dp[v]);
}

class Queue {
  constructor () {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear++] = val;
  }

  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front++];
    return val;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
