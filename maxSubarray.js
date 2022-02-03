// Understanding the problem
var maxSubArray = function (nums) {
  let max = -Infinity;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = 0;
      for (let k = j; k <= i; k++) {
        sum += nums[k];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/*
 var maxSubArray = function (nums) {
  let current = 0,
    max = -10000,
    i = 0;
  while (i < nums.length) {
    current = current + nums[i];
    if (current > max) {
      max = current;
    }
    if (current < 0) {
      current = 0;
    }
    ++i;
  }
  return max;
};
*/


/* 
var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    sum += nums[i];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }
  return max;
}; 

console.log(maxSubArray([5, 4, -1, 7, 8])); 
 */
