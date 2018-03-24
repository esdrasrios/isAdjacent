function solution(arr) {
  maxAdjacentValue = -2;
  const sortedArr = arr.slice().sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedArr.length - 1; i++) {
    diff = Math.abs(sortedArr[i + 1] - sortedArr[i]);
    maxAdjacentValue = Math.max(diff, maxAdjacentValue);
    console.log(diff, maxAdjacentValue)
  };
  return maxAdjacentValue;
};

module.exports = solution;
