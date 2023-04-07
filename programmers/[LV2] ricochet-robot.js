function solution(board) {
  const [ROW, COL] = [board.length, board[0].length];
  const dr = [1, 0, -1, 0];
  const dc = [0, 1, 0, -1];
  const queue = new Queue();
  let start = [0, 0];
  const visited = board.map(v => Array.from({ length: v.length }, () => false));

  for (let i = 0; i < ROW; i++) {
    if (board[i].includes('R')) {
      start = [i, board[i].indexOf('R')];
      break;
    }
  }

  queue.enqueue({ node: start, shift: 0 })

  while(!queue.isEmpty()) {
    const { node: [row, col], shift } = queue.dequeue();

    if (board[row][col] === 'G') {
      return shift;
    }

    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        let start = row;
        const end = dr[i] < 0 ? -1 : ROW;

        while (start !== end) {
          const cnt = board[start][col];

          if (cnt === 'D') {
            end === -1 ? start++ : start--;
            break;
          }

          end === -1 ? start-- : start++;
        }

        if (start === -1) { start = 0; }
        if (start === ROW) { start = ROW - 1; }

        if (!visited[start][col]) {
          visited[start][col] = true;
          queue.enqueue({ node: [start, col], shift: shift + 1 });
        }
      } else {
        let start = col;
        const end = dc[i] < 0 ? -1 : COL;

        while (start !== end) {
          const cnt = board[row][start];

          if (cnt === 'D') {
            end === -1 ? start++ : start--;
            break;
          }

          end === -1 ? start-- : start++;
        }

        if (start === -1) { start = 0; }
        if (start === COL) { start = COL - 1; }

        if (!visited[row][start]) {
          visited[row][start] = true;
          queue.enqueue({ node: [row, start], shift: shift + 1 });
        }
      }
    }
  }

  return -1;
}

class Queue {
  constructor() {
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
    return this.front === this.rear;
  }
}
