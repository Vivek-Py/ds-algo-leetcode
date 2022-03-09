// Understanding
var searchMatrix = function (matrix, target) {
  let r = matrix.length,
    c = matrix[0].length;
  const rows = [];
  const columns = [];
  for (let i = 0; i < r; ++i) {
    if (target >= matrix[i][0] && target <= matrix[i][c - 1]) {
      rows.push(i);
    }
  }
  for (let j = 0; j < c; ++j) {
    if (target >= matrix[0][j] && target <= matrix[r - 1][j]) {
      columns.push(j);
    }
  }

  for (const row in rows) {
    for (const column in columns) {
      if (matrix[rows[row]][columns[column]] === target) return true;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);

// Using singleFor loop and binarySearch
var searchMatrix = function (matrix, target) {
  let r = matrix.length,
    c = matrix[0].length;

  for (let i = 0; i < r; ++i) {
    if (target >= matrix[i][0] && target <= matrix[i][c - 1]) {
      if (doBinarySearch(matrix[i], target)) {
        return true;
      }
    }
  }
  return false;
};

function doBinarySearch(nums, t) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const midVal = nums[parseInt((start + end) / 2)];
    if (midVal === t) return true;
    else if (midVal < t) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);

// Finally cracked the code
var searchMatrix = function (matrix, target) {
  let size = matrix.length,
    start = 0,
    end = matrix[0].length - 1;

  while (start < size && end >= 0) {
    if (matrix[start][end] === target) return true;
    else if (matrix[start][end] < target) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
