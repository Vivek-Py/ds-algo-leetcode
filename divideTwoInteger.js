var divide = function (dividend, divisor) {
  let multiplier = 0;
  const sign = Math.sign(dividend) === Math.sign(divisor);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    let val = divisor;
    let times = 1;

    while (dividend >= val + val) {
      val += val;
      times += times;
    }
    dividend -= val;
    multiplier += times;
  }

  if (multiplier > 2 ** 31 - 1) return sign ? 2 ** 31 - 1 : -(2 ** 31);

  return sign ? multiplier : -multiplier;
};
console.log(divide(-10, -3));
