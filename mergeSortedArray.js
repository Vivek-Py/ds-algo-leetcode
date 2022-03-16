const sortArray = (arr, n) => {
  for (let i = 0; i < n - 1; ++i) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    } else {
      break;
    }
  }
};

var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  while (i < m) {
    if (nums1[i] > nums2[0]) {
      [nums1[i], nums2[0]] = [nums2[0], nums1[i]];
      sortArray(nums2, n);
    }
    ++i;
  }
  while (j < n) {
    nums1[m + j] = nums2[j];
    ++j;
  }
};
