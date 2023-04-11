function solution(m, n, startX, startY, balls) {
  const result = [];
  for (const ball of balls) {
    const [x, y] = ball;

    const candidate_x_down = (x - startX)**2 + (y + startY)**2;
    const candidate_x_up = (x - startX)**2 + (y - 2*n + startY)**2;
    const candidate_y_left = (x + startX)**2 + (y - startY)**2;
    const candidate_y_right = (x - 2*m + startX)**2 + (y-startY)**2;

    if(x === startX)
      if(y > startY)
        result.push(Math.min(candidate_x_down, candidate_y_left, candidate_y_right));
      else
        result.push(Math.min(candidate_x_up, candidate_y_left, candidate_y_right));
    else if(y === startY)
      if(x > startX)
        result.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_left));
      else
        result.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_right));
    else
      result.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_left, candidate_y_right));
  }

  return result;
}
