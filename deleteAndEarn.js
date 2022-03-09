var deleteAndEarn = function (nums) {
  const maxPoints = [];

  // [3,4,2] -> 
  for (let n of nums) {
    maxPoints[n] = maxPoints[n] ? (maxPoints[n] += n) : n;
  }

  for (let i = 2; i < maxPoints.length; ++i) {
    maxPoints[i] = Math.max(
      maxPoints[i - 1] || 0,
      (maxPoints[i] || 0) + (maxPoints[i - 2] || 0)
    );
  }

  return maxPoints[maxPoints.length - 1];
};

console.log(deleteAndEarn([3, 4, 2]));
// [2,2,3,3,3,4]

// Sligt change to overcome circuit-break
var deleteAndEarn = function (nums) {
  const maxPoints = new Array(Math.max(...nums)).fill(0);

  for (let n of nums) {
    maxPoints[n] = maxPoints[n] ? (maxPoints[n] += n) : n;
  }

  for (let i = 2; i < maxPoints.length; i++) {
    maxPoints[i] = Math.max(maxPoints[i - 1], maxPoints[i] + maxPoints[i - 2]);
  }

  return maxPoints[maxPoints.length - 1];
};

