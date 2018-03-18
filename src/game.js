function Game() {
  // prettier-ignore
  this.board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
}

Game.prototype.addNumberToBoard = function(number, rows, cols) {
  let cell = this.board[rows][cols];
  this.board[rows][cols] = number;
};

Game.prototype.randomiser = function(limit) {
  return Math.floor(Math.random() * limit);
};

Game.prototype.isEmpty = function(number) {
  return number === "";
};

Game.prototype.slide = function(row) {
  let noZeros = row.filter(val => val);
  let missing = 4 - noZeros.length;
  let shifted = Array(missing)
    .fill("")
    .concat(noZeros);
  return shifted;
};

Game.prototype.combine = function(row) {
  for (let i = 3; i > 0; i--) {
    let first = row[i];
    let second = row[i - 1];
    if (first === second) {
      row[i] = first + second;
      row[i - 1] = "";
    }
  }
  return row;
};

Game.prototype.slideAndCombine = function(row) {
  row = this.slide(row);
  row = this.combine(row);
  row = this.slide(row);
  return row;
};

Game.prototype.copyBoard = function(grid) {
  newGrid = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[i][j] = grid[i][j];
    }
  }
  return newGrid;
};

Game.prototype.isChange = function(a, b) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
};
