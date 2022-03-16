var maxAreaOfIsland = function (grid) {
  const rows = grid.length,
    columns = grid[0].length;
  let maxArea = 0,
    curr = 0;

    // 4 columns -> 0-3

  function checkSurroundings(i, j) {
    if (`${grid[i][j]}` === "1") {
      grid[i][j] = "*";
      curr += 1;
      i < rows - 1 && checkSurroundings(i + 1, j);
      j < columns - 1 && checkSurroundings(i, j + 1);
      i > 0 && checkSurroundings(i - 1, j);
      j > 0 && checkSurroundings(i, j - 1);
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      const temp = grid[i][j].toString();
      if (`${grid[i][j]}` === "1") {
        checkSurroundings(i, j);
        if (curr > maxArea) maxArea = curr;
        curr = 0;
      }
    }
  }

  return maxArea;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
