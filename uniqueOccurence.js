// Understanding
/* var uniqueOccurrences = function (arr) {
  let occurenceObj = {},
    set = new Set();
  for (let i = arr.length - 1; i > -1; --i) {
    if (occurenceObj[arr[i]]) {
      ++occurenceObj[arr[i]];
    } else {
      occurenceObj[arr[i]] = 1;
    }
  }
  for (const [key, val] of Object.entries(occurenceObj)) {
    if (set.has(val)) return false;
    else {
      set.add(val);
    }
  }
  return true;
}; */

var uniqueOccurrences = function (arr) {
  let occurenceObj = {};
  // for(let i=0; i < arr.length; ++i)
  for (let i = arr.length - 1; i > -1; --i) {
    if (occurenceObj[arr[i]]) {
      ++occurenceObj[arr[i]];
    } else {
      occurenceObj[arr[i]] = 1;
    }
  }
  const occurence = Object.values(occurenceObj);
  return occurence.length === new Set(occurence).size;
};
