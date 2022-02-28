// Basic sorting => Two FOR loops
// Time complexity => O(n^2)
// Using swapping
// [2, 3, 9, 0, 1, 40]
const sort = (nums) => {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
};

// Selection sort
// Get min val from the array
// Swap the min val and first index val of the iteration
// Time complexity => O(n^2), in-place: Yes
function swap(nums, a, b) {
  [nums[a], nums[b]] = [nums[b], nums[a]];
}

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; ++i) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[j] < nums[minIdx]) minIdx = j;
    }
    swap(nums, i, minIdx);
  }
  return nums;
};

// Bubble sort
// Two pass idea
// Every pass swaps adjacent element
// First loop is one pass
// No elements swapped by inner loop means it's sorted
// Best case => O(n) already sorted
// Worst/avg => O(n^2) => Worst: Reverse sorted
// In-place: yes
const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; ++i) {
    let swapped = false;
    for (let j = 0; j < nums.length - 1; ++j) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) return nums;
  }
  return nums;
};

// Insertion sort
const insertSort = (nums) => {
  for (let i = 1; i < nums.length; ++i) {
    let key = nums[i],
      j = i - 1;
    while (j >= 0 && key < nums[j]) {
      nums[j + 1] = nums[j];
      --j;
    }
    nums[j + 1] = key;
  }
  return nums;
};

// console.log(sort([2, 3, 9, 0, 1, 40]));
// console.log(selectionSort([2, 3, 9, 0, 1, 40]));
// console.log(bubbleSort([2, 3, 9, 0, 1, 40]));
// console.log(insertSort([2, 3, 9, 0, 1, 40]));
