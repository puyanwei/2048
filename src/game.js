function Game() {
  // prettier-ignore
  this.board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
}

Game.prototype.addNumberToBoard = function(number, index) {
  let rows = this.getRows(index);
  let cols = this.getCols(index);
  let cell = this.board[rows][cols];
  if (this.isEmpty(cell)) {
    this.board[rows][cols] = number;
  } else {
    throw "cell already taken";
  }
};

Game.prototype.randomiser = function(limit) {
  return Math.floor(Math.random() * limit);
};

Game.prototype.isEmpty = function(number) {
  return number === 0;
};

Game.prototype.getRows = function(index) {
  return Math.floor(index / 4);
};

Game.prototype.getCols = function(index) {
  return index % 4;
};
