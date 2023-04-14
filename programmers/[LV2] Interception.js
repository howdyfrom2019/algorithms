function solution(targets) {
  targets = targets.sort((a, b) => a[0] - b[0]);
  let camera = 1;
  let end = targets[0][1];

  for (let i = 1; i < targets.length; i++) {
    if (end < targets[i][0] + 0.1) {
      camera++;
      end = targets[i][1];
    }

    if (end > targets[i][1] + 0.1) {
      end = targets[i][1];
    }
  }

  return camera;
}
