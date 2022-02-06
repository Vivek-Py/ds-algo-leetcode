/*
// For understanding the logic
 var plusOne = function (digits) {
  let len = digits.length - 1;
  if (digits[len] < 9) {
    digits[len] += 1;
    return digits;
  } else {
    let itr = len;
    while (itr >= 0) {
      if (digits[itr] + 1 >= 10) {
        digits[itr] = 0;
        --itr;
        continue;
      } else {
        digits[itr] += 1;
        return digits;
      }
    }
  }
  digits.unshift(1);
  return digits;
}; */

/* 
// Compressing the prev logic
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; --i) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};
 */

// Faster than ~84%
var plusOne = function (digits) {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
