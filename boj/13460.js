const readline = require('readline');

function solution(N, M, board) {
  for (let i = 0; i < N; i++) {

  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [N, M] = input[0].split(" ").map(v => Number(v));
  const board = input.slice(1);
  solution(N, M, board);
  process.exit();
})
