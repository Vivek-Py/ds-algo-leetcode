var numIslands = function (grid) {
  const rows = grid.length,
    columns = grid[0].length;
  let islands = 0;

  const checkSurroundings = (i, j) => {
    if (grid[i][j] === "1") {
      grid[i][j] = "*";
      i < rows - 1 && checkSurroundings(i + 1, j);
      j < columns - 1 && checkSurroundings(i, j + 1);
      i > 0 && checkSurroundings(i - 1, j);
      j > 0 && checkSurroundings(i, j - 1);
    }
  };

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (grid[i][j] === "1") {
        islands += 1;
        checkSurroundings(i, j);
      }
    }
  }

  return islands;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
