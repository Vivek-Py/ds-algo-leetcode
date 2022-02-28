// Understanding approach
// [3, 2, 1, 5, 6, 4]
// Sorted => [1, 2, 3, 4, 5, 6]
// K = 2 (Second Largest)
// 1st = 6, 2nd = 5
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b-a); // O(nlogN)
  return nums[nums.length - k];
};

// Use quickSort -> Best case scenario = O(n) -> Worst case = O(n^2)
var findKthLargest = function (nums, k) {
  return quicksort(nums, nums.length - k);
  function quicksort(arr, k) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
      let pivot = partition(arr, l, r);
      if (pivot === k) {
        return arr[pivot];
      } else if (pivot < k) {
        l = pivot + 1;
      } else {
        r = pivot - 1;
      }
    }
    return arr[l];
  }
  function partition(arr, l, r) {
    let mid = parseInt((l + r) / 2);
    let pivot = arr[mid];
    [arr[mid], arr[r]] = [arr[r], arr[mid]];
    let i = l;
    let j = r - 1;
    while (i <= j) {
      while (arr[i] < pivot) ++i;
      while (arr[j] >= pivot) --j;
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
  }
};
