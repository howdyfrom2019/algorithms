function solution(babbling) {
  let result = 0;
  const speak = ["aya", "ye", "woo", "ma"];

  for (let word of babbling) {
    for (let cursor = 0; cursor < 4; cursor++) {
      const target = speak[cursor];
      if (word.includes(target)) {
        const splits = word.split(target);
        word = splits.reduce((a, v, i, arr) => a + ((i > 0 && arr[i - 1] === '') ? target : v),'');
      }
    }
    if (word.length === 0) result++;
  }

  return result;
}
