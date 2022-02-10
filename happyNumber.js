// Understanding the problem

/* var isHappy = function (n) {
  let sqrdSum = n;
  const sumTracker = [];
  // ["1", "0", "0"]
  while (sqrdSum !== 1) {
    sqrdSum = sqrdSum
      .toString()
      .split("")
      .reduce((total, currentItem) => total + currentItem * currentItem, 0);
    // loop
    if (sumTracker[sqrdSum]) return false;

    sumTracker[sqrdSum] = true;
  }
  return true;
}; */

// console.log(isHappy(100));
// console.log(isHappy(2));

// Using sets instead of arrays
// ~99% faster solutions
var isHappy = function (n) {
  let sqrdSum = n;
  const sumTracker = new Set();
  while (sqrdSum !== 1) {
    sqrdSum = sqrdSum
      .toString()
      .split("")
      .reduce((total, currentItem) => total + currentItem * currentItem, 0);

    if (sumTracker.has(sqrdSum)) return false;

    sumTracker.add(sqrdSum);
  }
  return true;
};

/* var isHappy = function (n) {
  let set = new Set();
  while (n != 1) {
    let current = n;
    let sum = 0;
    while (current != 0) {
      // 1 % 10 => 1
      sum += (current % 10) ** 2;
      current = Math.floor(current / 10);
    }
    if (set.has(sum)) return false;
    set.add(sum);
    n = sum;
  }
  return true;
}; */
