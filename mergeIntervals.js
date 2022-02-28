// Understanding
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

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
