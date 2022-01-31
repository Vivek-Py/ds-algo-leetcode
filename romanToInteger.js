var romanToInt = function (s) {
  const mappingSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integer = 0;
  let level = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    const newVal = mappingSymbol[s[i]];
    if (newVal >= level) {
      integer += newVal;
      level = newVal;
    } else {
      integer -= newVal;
    }
  }
  return integer;
};
