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
  let rows = Math.floor(index / 4);
  let cols = index % 4;
  let cell = this.board[rows][cols];
  if (this.isEmpty(cell)) {
    this.board[rows][cols] = number;
  } else {
    throw "cell already taken";
  }
};

Game.prototype.isEmpty = function(number) {
  return number === 0;
};
