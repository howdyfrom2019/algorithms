function getDayStamp(y, m, d) {
  return (y - 1) * 12 * 28 + (m - 1) * 28 + d;
}

function solution(today, terms, privacies) {
  const [year, month, day] = today.split(".").map(v => Number(v));
  const dayStamp = getDayStamp(year, month, day);
  const result = [];

  for (const term of terms) {
    const [doc, duration] = term.split(" ");
    privacies
      .forEach((privacy, i) => {
        if (!privacy.includes(doc)) return;
        const agreeDayStamp = getDayStamp(...privacy.replace(/\s|[A-Z]/g, "").split(".").map(v => Number(v)));
        if (dayStamp > agreeDayStamp + Number(duration) * 28 - 1) {
          result.push(i + 1);
        }
      });
  }

  result.sort((a, b) => a - b);
  return result;
}