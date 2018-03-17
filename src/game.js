function Game() {
  // prettier-ignore
  this.board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, 0]
  ];
}

Game.prototype.addNumberToBoard = function(number, index) {
  this.board[this.rowGetter(index)][this.colGetter(index)] = number;
};

Game.prototype.rowGetter = function(index) {
  return Math.floor(index / 4);
};

Game.prototype.colGetter = function(index) {
  return index % 4;
};
