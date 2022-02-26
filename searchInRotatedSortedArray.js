// Understanding
// No matter what at least one side is sorted
// Take any example of array [0,1,2,3,4,5,6]
// [4,5,6,0,1,2,3] => (Mid=0) Both side sorted
// [6,0,1,2,3,4,5] => (Mid=2) Right side sorted
// [2,3,4,5,6,0,1] => (Mid=5) Left side sorted

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // LEFT NUMBER <= NUMBER IN MID
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// JOKE - Not O(log n)
// return nums.indexOf(target)
