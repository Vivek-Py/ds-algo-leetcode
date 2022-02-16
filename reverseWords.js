// Understanding and Builtin functions
/* var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((item) => item.length > 0)
    .reverse()
    .join(" ")
    .trim();
}; */

// Trivial approach
// ~93% Faster
var reverseWords = function (s) {
  let res = "";
  for (let start = s.length - 1; start >= 0; --start) {
    if (s.charAt(start) == " ") continue;
    let end = start;
    while (start >= 0 && s.charAt(start) != " ") --start;
    res += s.substring(start + 1, end + 1) + " ";
  }
  return res.toString().trim();
};

console.log(reverseWords("a good   example"));
