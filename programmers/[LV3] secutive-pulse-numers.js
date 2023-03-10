function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

function solution(sequence) {
  const pulse = sequence.map(((v, i) => v * (i % 2 === 0 ? -1 : 1)));
  let result = 0;
  result = Math.max(result, getMaxSubSum(pulse), getMaxSubSum(pulse.map(v => v * -1)));
  return result;
}
