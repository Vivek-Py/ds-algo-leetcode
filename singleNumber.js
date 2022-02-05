/* var singleNumber = function (nums) {
  const tempObj = {};
  for (let i = nums.length - 1; i > -1; --i) {
    if (tempObj[nums[i]]) tempObj[nums[i]] += 1;
    else {
      tempObj[nums[i]] = 1;
    }
  }
  console.log(tempObj);
  return Object.keys(tempObj).find((key) => tempObj[key] === 1);
}; */

// [2,2,1]
// 2 -> 2: 1
// 2 -> 2: 2
// 1 -> 1: 1

// ~88% Fast
// [2,2,1]
// [2,1]
// Array sum = 2 + 2 + 1 = 5
// Unique sum = 2 + 1 = 3
// Unique sum - (Array sum - Unique Sum) = 3 - (5-3) = 1

var singleNumber = function (nums) {
  let sumSet = 0,
    sumNums = 0;

  let set = new Set(); // WHich unique ele only

  for (let i = nums.length - 1; i > -1; --i) {
    sumNums += nums[i];
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      sumSet += nums[i];
    }
  }

  // XOR
  return sumSet - (sumNums - sumSet); // 1
};

// Using XOR TABLE
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 0

const a = 5; // 101
const b = 3; // 011
// a^b  = 6  // 110

var singleNumber = function (nums) {
  let sum = 0;
  for (let i = nums.length - 1; i > -1; --i) {
    sum ^= nums[i];
  }
  return sum;
};

console.log(singleNumber([2, 2, 1]));
