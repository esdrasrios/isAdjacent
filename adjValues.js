function solution(arr) {
  maxAdjacentValue = -2;
  adjacentAbsoluteValue = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (isAdj(arr, i, j) == true) {
        adjacentAbsoluteValue = Math.abs(arr[i] - arr[j]);
        if (maxAdjacentValue < adjacentAbsoluteValue) {
          maxAdjacentValue = adjacentAbsoluteValue;
        };
      };
    };
  };
  return maxAdjacentValue;
};

function isAdj(arr, index1, index2) {
  const sortedArr = arr.slice().sort(function(a, b) {
    return a - b;
  });

  P = arr[index1];
  Q = arr[index2];

  I1 = sortedArr.indexOf(P);
  I2 = sortedArr.indexOf(Q);

  minNumber = Math.min(I1, I2);
  maxNumber = Math.max(I1, I2);

  for (let i = minNumber; i < maxNumber; i++) {
    if (sortedArr[i] != P && sortedArr[i] != Q) {
      return false;
    };
  };
  return true;
};

module.exports = solution;


