var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs === null || strs.length === 0) return prefix;
  const str = strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    const char = str[i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }

  return prefix;
};
