function solution(name, yearning, photo) {
  const n = name.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(name[i], yearning[i]);
  }

  return photo.map((row) => {
    let result = 0;
    for (const memory of row) {
      if (map.has(memory)) result += map.get(memory);
    }
    return result;
  });
}
