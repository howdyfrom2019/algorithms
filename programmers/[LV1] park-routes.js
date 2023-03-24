function solution(park, routes) {
  const units = { 'N': [-1, 0], 'E': [0, 1], 'S': [1, 0], 'W': [0, -1] };
  const MAXR = park.length;
  const MAXC = park[0].length;
  let site = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      site = [i, park[i].indexOf('S')];
      break;
    }
  }

  for (const route of routes) {
    const [key, dist] = route.split(" ").map((v, i) => i === 1 ? Number(v) : v);
    const [nr, nc] = units[key].map(v => v * dist);
    const [row, col] = site;

    if (row + nr > -1 && col + nc > -1 && (row + nr < MAXR) && (col + nc < MAXC)) {
      let skipFlag = false;
      if (key === 'N' || key === 'S') {
        for (let i = Math.min(row, row + nr); i <= Math.max(row, row + nr); i++) {
          if (park[i][col] === 'X') {
            skipFlag = true;
            break;
          }
        }
      } else {
        for (let i = Math.min(col, col + nc); i <= Math.max(col, col + nc); i++) {
          if (park[row][i] === 'X') {
            skipFlag = true;
            break;
          }
        }
      }

      if (!skipFlag) {
        site = [row + nr, col + nc];
      }
    }
  }

  return site;
}
