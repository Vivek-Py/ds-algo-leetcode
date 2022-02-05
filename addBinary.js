// Need to Understand the binary addition before
// 0 + 0 = 0
// 1 + 0 / 0 + 1 = 1
// 1 + 1 = 0 carry = 1
// 1 + 1 + 1 = 1 carry = 1

/**
 * @example
 *  Carry 1 1 1
 *          1 0 1 0
 *        + 1 1 1 0
 *        ----------
 *        1 1 0 0 0
 * */

// 1010 -> 0*2**0 + 1*2**1 .... -> a
// 1110 ->  -> b
// a+b -> binary
// parseInt(binary, 16)
// .toString(16)


var addBinary = function (a, b) {
  for(let i = a.length - 1; i>=0; --i) {

  }
  const A = a.split("").reverse();
  const B = b.split("").reverse();
  let carry = 0,
    finalSum = [];
  let i = 0;
  const len = a.length > b.length ? a.length : b.length;

  // parseInt(A[i]) -> +A[i]

  while (i < len) {
    const x = A[i] ? +A[i] : 0;
    const y = B[i] ? +B[i] : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 2);
    // [0] -> sum%2
    finalSum.unshift(sum % 2);
    i++;
  }
  if (carry > 0) finalSum.unshift(carry);

  return finalSum.join("");
};

addBinary("10101", "1011");
