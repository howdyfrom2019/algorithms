function solution(picks, minerals) {
  const n = minerals.length;
  const keys = { 'diamond': 0, 'iron': 1, 'stone': 2 };
  const fatigues = [[1, 1, 1], [5, 1, 1], [25, 5, 1]];
  const queue = [];
  queue.push({ cursor: 0, fatigue: 0, picks: picks.map(v => v)});
  let result = Infinity;

  while (queue.length) {
    const { cursor, fatigue, picks } = queue.shift();

    if (cursor >= n || picks.every(v => v === 0)) {
      result = Math.min(result, fatigue);
      continue;
    }

    for (let i = 0; i < 3; i++) {
      if (picks[i] === 0) continue;
      let cntFatigue = fatigue;

      for (let j = 0; j < Math.min(5, n - cursor); j++) {
        const mineral = minerals[cursor + j];
        const key = keys[mineral];
        cntFatigue += fatigues[i][key];
      }

      queue.push({ cursor: cursor + 5, fatigue: cntFatigue, picks: picks.map((v, j) => i === j ? v - 1 : v) });
    }
  }

  return result;
}
