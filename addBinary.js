// Need to Understand the binary addition before
// 0 + 0 = 0
// 1 + 0 / 0 + 1 = 1
// 1 + 1 = 0 carry = 1
// 1 + 1 + 1 = 1 carry = 1

/**
 * @example
 *  Carry 1 1 1
 *          1 0 1 0
 *        + 1 1 1 1
 *        ----------
 *        1 1 0 0 0
 * */

var addBinary = function (a, b) {
  const A = a.split("").reverse();
  const B = b.split("").reverse();
  let carry = 0,
    answer = [];
  let i = 0;
  const len = a.length > b.length ? a.length : b.length;

  while (i < len) {
    const x = A[i] ? +A[i] : 0;
    const y = B[i] ? +B[i] : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 2);
    answer.unshift(sum % 2);
    i++;
  }
  if (carry > 0) answer.unshift(carry);

  return answer.join("");
};
