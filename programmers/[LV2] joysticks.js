function solution(name) {
  const ascends = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const descends = ascends.split("").reverse().join("");
  let result = 0;
  const visited = name.split("").map(v => v === 'A');

  for (const letter of name) {
    result += Math.min(ascends.indexOf(letter), descends.indexOf(letter) + 1);
  }

  let i = 0;
  let loop = 0;

  while (!visited.every((v) => v)) {
    visited[i] = true;
    if (i === 0) { i = name.length - 1; }
    else i--;
    loop++;
  }

  result += Math.min(name.length - 1, loop - 1);

  return result;
}
