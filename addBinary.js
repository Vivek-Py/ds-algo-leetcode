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

// a = "11", b = "1"

var addBinary = function (a, b) {
  let carry = 0,
    finalSum = [];
  let i = 0;
  const len = a.length > b.length ? a.length : b.length;

  const A = a.split("").reverse();
  const B = b.split("").reverse();

  while (i < len) {
    const x = A[i] ? +A[i] : 0;
    const y = B[i] ? +B[i] : 0;
    const sum = carry + x + y;
    carry = parseInt(sum / 2);
    finalSum.unshift(sum % 2);
    i++;
  }
  if (carry > 0) finalSum.unshift(carry);

  return finalSum.join("");
};

console.log(addBinary("11", "1"));
