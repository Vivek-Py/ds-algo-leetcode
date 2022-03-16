/* var permute = function (nums) {
  const res = [];
  const tempArr = [];
  const traversalData = {};
  findPermutations(nums, res, tempArr, traversalData);
  return res;
};

function findPermutations(nums, res, tempArr, traversalData) {
  if (tempArr.length === nums.length) {
    res.push([...tempArr]);
    return;
  }
  for (let i = 0; i < nums.length; ++i) {
    if (!traversalData[i]) {
      tempArr.push(nums[i]);
      traversalData[i] = true;
      findPermutations(nums, res, tempArr, traversalData);
      traversalData[i] = false;
      tempArr.pop();
    }
  }
} */

var permute = function (nums, unique = [], answer = []) {
  // Input: nums = [1,2,3] => 3*2*1 => 6
  // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  
  if (!nums.length) answer.push([...unique]);
  
  for (let i = nums.length - 1; i > -1; --i) {
    const notCurrentIndexArr = nums.filter((n, index) => index !== i);
    unique.push(nums[i]);
    permute(notCurrentIndexArr, unique, answer);
    unique.pop();
  }
  
  return answer;
};

console.log(permute([1, 2, 3]));