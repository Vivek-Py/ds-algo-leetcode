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

var rob = function (nums) {
  let curr = 0,
    prev = 0,
    temp = null;
  for (let i = nums.length - 1; i > -1; --i) {
    temp = curr;
    curr = Math.max(prev + nums[i], curr);
    prev = temp;
  }
  return curr;
};
console.log(rob([-1, -2, -3]));
