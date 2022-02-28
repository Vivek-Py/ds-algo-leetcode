// Understanding the problem statement
/* var findPeakElement = function (nums) {
    // [1]
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      if (nums[i] > nums[i + 1]) return i;
    } else if (i == nums.length - 1) {
      if (nums[i] > nums[i - 1]) return i;
    } else {
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
    }
  }
  return 0;
}; */
// [3,2,1]
// [1,2,3]

// Using binary search => why ?
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = parseInt((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) r = mid;
    else l = mid + 1;
  }
  return l;
};
// nums[2] = 3
console.log(findPeakElement([5, 4, 3, 2, 1]));
