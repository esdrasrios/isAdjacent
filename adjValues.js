function solution(arr) {
  let maxAdjacentValue = -2;
  const sortedArr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    const diff = Math.abs(sortedArr[i + 1] - sortedArr[i]);
    maxAdjacentValue = Math.max(diff, maxAdjacentValue);
  };

  return maxAdjacentValue;
};

module.exports = solution;