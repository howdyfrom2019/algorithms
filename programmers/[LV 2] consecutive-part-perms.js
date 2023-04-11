function solution(sequence, k) {
  let temp = sequence[0];
  let [left, right] = [0, 0];
  let minDist = Infinity;
  const result = [];

  while (left <= right && left < sequence.length && right < sequence.length) {
    if (temp === k) {
      minDist = Math.min(minDist, right - left);
      result.push({ dist: right - left, val: [left, right] });
      temp += sequence[++right];
      continue;
    }
    if (temp < k) {
      temp += sequence[++right];
    } else {
      temp -= sequence[left++];
    }
  }

  return result
    .filter(({ dist }) => dist === minDist)
    .map(({ val }) => val)
    .sort((a, b) => a[0] - b[0])[0];
}
