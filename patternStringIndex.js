// Using built-in functions
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  return haystack.indexOf(needle);
};

// Using the for-loop logic
var strStr = function (haystack, needle) {
  if (needle.length == 0) return 0;

  for (let i = 0; i < haystack.length; ++i) {
    let j = i + needle.length;
    if (j <= haystack.length) {
      let sub = haystack.substring(i, j);
      if (sub == needle) return i;
    }
  }
  return -1;
};
