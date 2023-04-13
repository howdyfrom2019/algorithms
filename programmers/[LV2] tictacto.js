function solution(board) {
  const os = [];
  const xs = [];
  let [onumber, xnumber] = [0, 0];

  for (let i = 0; i < board.length; i++) {
    let [orow, ocol] = [true, true];
    let [xrow, xcol] = [true, true];

    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') { onumber++; xrow = false; }
      else if (board[i][j] === 'X') { xnumber++; orow = false; }
      else { xrow = false; orow = false; }

      if (board[j][i] === 'O') { xcol = false; }
      else if (board[j][i] === 'X') { ocol = false; }
      else { xcol = false; ocol = false; }
    }

    if (orow) { os.push({ dir: 'row', i }) }
    if (ocol) { os.push({ dir: 'col', i }) }
    if (xrow) { xs.push({ dir: 'row', i }) }
    if (xcol) { xs.push({ dir: 'col', i }) }
  }

  const diagonal1 = [board[0][0], board[1][1], board[2][2]];
  const diagonal2 = [board[0][2], board[1][1], board[2][0]];

  if (diagonal1.every(v => v === 'O')) { os.push({ dir: 'dia', i: 0 }) }
  else if (diagonal1.every(v => v === 'X')) { xs.push({ dir: 'dia', i: 0 }) }

  if (diagonal2.every(v => v === 'O')) { os.push({ dir: 'dia', i: 1 }) }
  else if (diagonal2.every(v => v === 'X')) { xs.push({ dir: 'dia', i: 1 }) }


  if (os.length && xs.length) {
    return 0;
  } else if (os.length) {
    return onumber - xnumber === 1 ? 1 : 0;
  } else if (xs.length) {
    return onumber - xnumber === 0 ? 1 : 0;
  } else {
    return (onumber - xnumber === 1 || onumber - xnumber === 0) ? 1 : 0;
  }
}
