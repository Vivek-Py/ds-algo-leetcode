// Understanding
var moveZeroes = function (nums) {
  let zeroEncounter = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] != 0) {
      nums[zeroEncounter++] = nums[i];
    }
  }
  for (let i = zeroEncounter; i < nums.length; ++i) {
    nums[i] = 0;
  }
};

// Same approach as the above
var moveZeroes = function (nums) {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; ++cur) {
    if (nums[cur] != 0) {
      [nums[lastNonZeroFoundAt++], nums[cur]] = [
        nums[cur],
        nums[lastNonZeroFoundAt],
      ];
    }
  }
};
