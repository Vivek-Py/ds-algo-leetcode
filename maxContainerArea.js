// Understanding  - Brute force approach
var maxArea = function (height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; ++i) {
    for (let j = i + 1; j < height.length; ++j) {
      maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return maxArea;
};

// Faster solution?
/* var maxArea = function (height) {
  let maxArea = 0,
    start = 0,
    end = height.length - 1;
  while (start < end) {
    const minHeight = Math.min(height[start], height[end]);
    maxArea = Math.max(maxArea, minHeight * (end - start));
    if (height[start] < height[end]) ++start;
    else --end;
  }
  return maxArea;
}; */

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
