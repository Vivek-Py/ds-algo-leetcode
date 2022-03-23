var canJump = function (nums) {
  let maxReachableIndex = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (maxReachableIndex < i) {
      return false;
    }
    maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);
  }
  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
