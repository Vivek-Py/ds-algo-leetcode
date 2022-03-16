// Understanding
/* var rob = function (nums) {
  let a = 0,
    b = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (i % 2 == 0) {
      // a = a + nums[i];
      a = Math.max(a + nums[i], b);
    } else {
      // b = b + nums[i];
      b = Math.max(a, b + nums[i]);
    }
  }

  return Math.max(a, b);
};
 */
// console.log(rob([2, 1, 1, 2]));

/* var rob = function (nums) {
  let curr = 1,
    prev = 1,
    temp = null;
  for (let i = nums.length - 1; i > -1; --i) {
    temp = curr;
    curr = Math.max(prev * nums[i], curr);
    prev = temp;
  }
  return curr;
};
console.log(rob([0, 1, 2, 3, -1, 4, 0, 5, 100, 0])); */

// Sorted array -> [1,2,3,4,5,5,5,6] -> [4,6]
// Target => 5, count = ?, Time complexity  < n
