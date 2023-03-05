function solution(n, m, section) {
  const dp = Array.from({ length: n + 1 }, () => true);
  section.forEach((item) => dp[item] = false);
  let count = 0;
  let cursor = 0;

  while (cursor < n + 1) {
    if (!dp[cursor]) {
      for (let i = cursor; i < cursor + m; i++) {
        dp[i] = true;
      }
      count++;
      cursor += m - 1;
    }
    cursor++;
  }

  return count;
}
