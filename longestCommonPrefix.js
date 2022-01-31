var longestCommonPrefix = function (strs) {
  let commonLength = strs[0].length;
  for (let i = 1; i < strs.length; ++i) {
    let j = 0;
    const limit = commonLength > strs[i].length ? strs[i].length : commonLength;
    while (j < limit) {
      if (strs[0][j] !== strs[i][j]) break;
      ++j;
    }
    commonLength = j;
  }
  return strs[0].substring(0, commonLength);
};
