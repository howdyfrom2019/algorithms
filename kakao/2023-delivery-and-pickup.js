function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let [d, p] = [0, 0];

  for (let i = n - 1; i > -1; i--) {
    let cnt = 0;

    d -= deliveries[i];
    p -= pickups[i];

    while (d < 0 || p < 0) {
      d += cap;
      p += cap;
      cnt += 1;
    }

    answer += (i + 1) * 2 * cnt;
  }

  return answer;
}