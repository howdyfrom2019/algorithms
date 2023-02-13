function solution(weights) {
  let count = 0;
  const dist = [[2, 3], [3, 4], [2, 4]];
  const map = new Map();

  for (const weight of weights) {
    if (map.has(weight)) {
      const val = map.get(weight);
      map.set(weight, val + 1);
    } else {
      map.set(weight, 1);
    }
  }

  for (const [key, val] of map) {
    if (val > 1) {
      count += val * (val - 1) / 2;
    }

    for (const [first, sec] of dist) {
      const target1 = first * key / sec;
      const target2 = sec * key / first;
      if (map.has(target1)) count += val * map.get(target1);
      if (map.has(target2)) count += val * map.get(target2);
    }

    map.set(key, 0);
  }

  return count;

}