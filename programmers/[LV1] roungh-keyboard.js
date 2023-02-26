function solution(keymap, targets) {
  const maps = [];
  const result = [];

  for (const keys of keymap) {
    const map = new Map();
    for (let i = 0; i < keys.length; i++) {
      if (map.has(keys[i])) {
        map.set(keys[i], Math.min(i + 1, map.get(keys[i])));
      } else {
        map.set(keys[i], i + 1);
      }
    }
    maps.push(map);
  }

  for (const target of targets) {
    let count = 0;
    for (const letter of target) {
      let min = Infinity;
      for (const map of maps) {
        if (!map.has(letter)) continue;
        min = Math.min(map.get(letter), min);
      }
      if (min !== Infinity) {
        count += min;
      }
    }

    result.push(count === 0 ? -1 : count);
  }

  return result;
}
