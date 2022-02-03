// For Understanding
/* var lengthOfLastWord = function (s) {
  const str = s.split(" ");
  for (let i = str.length - 1; i >= 0; --i) {
    if (str[i] !== "") return str[i].length;
  }
}; */

// Without using split
var lengthOfLastWord = function (s) {
  let lastWord = "",
    len = s.length - 1;
  for (let i = len; i >= 0; --i) {
    if (s[i] === " " && !lastWord.length) continue;
    else if (lastWord.length && s[i] === " ") break;
    else lastWord += s[i];
  }
  return lastWord.length;
};
