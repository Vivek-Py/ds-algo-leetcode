/* var threeSum = function (nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; ++i) {
    let left = i + 1,
      right = nums.length - 1,
      sum = 0;

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      // [LEFT->  <-RIGHT-LENGTH]
      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (nums[left + 1] === nums[left]) ++left;
        while (nums[right - 1] === nums[right]) --right;
        ++left;
        --right;
      } else if (sum < 0) ++left;
      else --right;
    }
    while (nums[i + 1] === nums[i]) ++i;
  }
  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
 */

var threeSum = function (nums) {
  let res = [];
  let sortedNum = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNum.length; i++) {
    let a = sortedNum[i];
    let b = sortedNum[i - 1];

    if (a === b) {
      continue;
    }

    let lp = i + 1;
    let rp = sortedNum.length - 1;
    // console.log("im stuck at IL1");
    // 1, 5;
    while (lp < rp) {
      let le = sortedNum[lp];
      let re = sortedNum[rp];
      let threeSum = a + le + re;

      if (threeSum > 0) {
        rp--;
      } else if (threeSum < 0) {
        lp++;
      } else {
        // console.log([a, SVGAnimatedLengthList, re]);
        console.log([a, le, re]);
        res.push([a, le, re]);
        while (nums[lp + 1] === nums[lp]) ++lp;
        while (nums[rp - 1] === nums[rp]) --rp;
        ++lp;
        --rp;
      }

      //   console.log("im stuck at IL2");
    }
  }
  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
