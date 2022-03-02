// Understanding
var merge = function (intervals) {
  // intervals.sort((a, b) => a[0] - b[0]);
  const overlappingInterval = [];
  let overlapped = false;
  for (let i = 0; i < intervals.length; ++i) {
    if (!intervals[i + 1]) {
      overlappingInterval.push([intervals[i][0], intervals[i][1]]);
    } else if (intervals[i + 1][0] <= intervals[i][1]) {
      overlappingInterval.push([
        Math.min(intervals[i][0], intervals[i + 1][0]),
        Math.max(intervals[i + 1][1], intervals[i][1]),
      ]);
      overlapped = true;
      ++i;
      continue;
    } else {
      overlappingInterval.push([intervals[i][0], intervals[i][1]]);
    }
  }
  return overlapped ? merge(overlappingInterval) : overlappingInterval;
};

var merge = function (intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let [start, end] of intervals) {
    if (start <= result[result.length - 1][1]) {
      const [startPrev, endPrev] = result.pop();
      result.push([startPrev, Math.max(end, endPrev)]);
    } else result.push([start, end]);
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
