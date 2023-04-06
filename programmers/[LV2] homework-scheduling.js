function solution(plans) {
  const stack = [];
  const timeTable = new Map();
  let [i, n] = [Infinity, 0];
  const result = [];

  plans.forEach((plan) => {
    const [subject, start, duration] = plan;
    const timestamp = start.split(":")
      .reduce((a, v, i) => a + (i === 0 ? Number(v) * 60 : Number(v)), 0);

    timeTable.set(timestamp, { subject, duration: Number(duration) });
    i = Math.min(timestamp, i);
    n = Math.max(timestamp, n);
  });

  let currentJob = null;
  let start = 0;

  for (i; i <= n; i++) {
    if (currentJob === null) {
      if (timeTable.has(i)) {
        currentJob = timeTable.get(i);
        start = i;
      } else if (stack.length > 0) {
        currentJob = stack.pop();
        start = i;
      }
      continue;
    }

    const { subject, duration } = currentJob;
    const end = start + duration;

    if (end === i) {
      result.push(subject);
      currentJob = null;
    }

    if (timeTable.has(i)) {
      if (end > i) stack.push({ subject, duration: end - i });
      currentJob = timeTable.get(i);
      start = i;
    } else if (stack.length && currentJob === null) {
      currentJob = stack.pop();
      start = i;
    }
  }

  if (currentJob) {
    result.push(currentJob.subject);
  }
  stack.reverse();
  stack.forEach(({ subject }) => result.push(subject));
  return result;
}
