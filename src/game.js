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
  this.board[this.rowGetter(index)][this.colGetter(index)] = number;
  console.table(this.board);
};

Game.prototype.rowGetter = function(index) {
  return Math.floor(index / 4);
};

Game.prototype.colGetter = function(index) {
  return index % 4;
};
