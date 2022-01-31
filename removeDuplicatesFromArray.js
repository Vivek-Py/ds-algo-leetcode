const removeDuplicates = function (nums) {
  const len = nums.length;
  let count = 0;
  for (let itr = 0, index = 0; itr < len; ++itr) {
    while (itr + 1 < len && nums[itr] === nums[itr + 1]) {
      itr++;
    }
    nums[index++] = nums[itr];
    count++;
  }
  return count;
};
