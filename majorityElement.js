// Understanding
// ~92% Faster solution
var majorityElement = function (nums) {
  const majorityCount = Math.ceil(nums.length / 2);
  const sortedNums = nums.sort((a, b) => a - b);

  let count = 0,
    num = sortedNums[0];

  for (let i = 0; i < nums.length; ++i) {
    if (sortedNums[i] === num) {
      if (++count >= majorityCount) return num;
    } else {
      count = 0;
      num = sortedNums[i];
      ++count;
    }
  }
};

/* 
// Since major elements appear more than n/2
// So middle most element would be major element
var majorityElement = function(nums) {
    nums.sort((a,b) => a-b);
    return nums[Math.floor(nums.length/2)];
};
*/

/* 
// Boyer moore algo
var majorityElement = function (nums) {
  let count = 0;
  let majorElement = null;

  for (let i = nums.length - 1; i > -1; --i) {
    if (count == 0) {
      majorElement = nums[i];
    }
    count += nums[i] == majorElement ? 1 : -1;
  }
  return majorElement;
}; */

