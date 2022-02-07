// Understanding the problem
// n = 1, count = 1

// n = 2, count = 2
// 1 + 1 = 2
// 2 = 2

// n = 3, count = 3
// 1 + 1 + 1 = 3
// 1 + 2 = 3
// 2 + 1 = 3

// n = 4, count= 5
// 1 + 1 + 1 + 1 = 4
// 2 + 2 = 4
// 2 + 1 + 1 = 4
// 1 + 2 + 1 = 4
// 1 + 1 + 2 = 4

// n = 5, count = 8
// 1 + 1 + 1 + 1 + 1
// 2 + 1 + 2
// 2 + 2 + 1
// 1 + 2 + 2
// 1 + 2 + 1 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 2 + 1
// 1 + 1 + 1 + 2

// fibonacci series
// 1, 1, 2, 3, 5, 8......

var climbStairs = function (n) {
  let firstDigit = 1,
    secondDigit = 1;
  for (let i = 0; i < n - 1; ++i) {
    let temp = firstDigit;
    firstDigit += secondDigit;
    secondDigit = temp;
  }
  return firstDigit;
};
