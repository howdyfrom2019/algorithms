function solution(maps) {
  const MAX_R = maps.length;
  const MAX_C = maps[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const result = [];

  const visited = maps.map(v => Array.from({ length: MAX_C }, () => false));
  for (let i = 0; i < MAX_R; i++) {
    for (let j = 0; j < MAX_C; j++) {
      if (!visited[i][j] && maps[i][j] !== 'X') {
        visited[i][j] = true;
        result.push(dfs(i, j));
      }
    }
  }

  if (result.length === 0) return [-1];
  return result.sort((a, b) => a - b);

  function dfs(row, col) {
    let result = Number(maps[row][col]);
    for (let i = 0; i < 4; i++) {
      const nRow = row + dy[i];
      const nCol = col + dx[i];

      if (nRow > -1 && nCol > -1 && nRow < MAX_R && nCol < MAX_C && !visited[nRow][nCol] && maps[nRow][nCol] !== 'X') {
        visited[nRow][nCol] = true;
        result += dfs(nRow, nCol);
      }
    }

    return result;
  }
}