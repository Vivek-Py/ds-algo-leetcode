// Understanding
var intersection = function (nums1, nums2) {
  const firstSet = new Set(nums1);
  const secondSet = new Set(nums2);

  const itr = firstSet.entries();
  const result = [];

  for (const [item] of itr) {
    if (secondSet.has(item)) {
      result.push(item);
    }
  }
  return result;
};

// Deleting already added items
// Saves time while iterating
var intersection = function (nums1, nums2) {
  const firstSet = new Set(nums1);
  const secondSet = new Set(nums2);

  const itr = firstSet.entries();
  const result = [];

  for (const [item] of itr) {
    if (secondSet.has(item)) {
      result.push(item);
      secondSet.delete(item);
    }
  }
  return result;
};
