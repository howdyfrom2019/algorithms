function solution(x, y, n) {
  let dp = new Set([x]);
  let loop = 1;
  let min = Infinity;

  if (x === y) return 0;
  while (true) {
    min = Infinity;
    const next = new Set();
    for (const x of dp) {
      next.add(x * 2);
      next.add(x * 3);
      next.add(x + n);
      min = Math.min(x * 2, x * 3, x + n, min);
      if (x * 2 === y || x * 3 === y || x + n === y) {
        return loop;
      }
    }

    if (min > y) return -1;
    dp = next;
    loop++;
  }
}