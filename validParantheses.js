// Understanding
// Stack - LIFO

// '[]'
// [0] -> [
// [1] -> ] (pop [0])

// [)
// [0] -> [
// [1] -> ) (no poping happens)
// Array length > 0 -> false

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const arr = [],
    len = s.length;

  for (let i = 0; i < len; ++i) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      arr.push(s[i]);
    } else {
      if (arr.length === 0) return false;
      if (s[i] == ")" && arr.pop() != "(") return false;
      if (s[i] == "}" && arr.pop() != "{") return false;
      if (s[i] == "]" && arr.pop() != "[") return false;
    }
  }

    if (arr.length > 0) return false;
  return true;
};

