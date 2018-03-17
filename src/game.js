function Game() {
  this.board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
}

Game.prototype.addNumberToBoard = function(number, index) {
  let cols = index % 4;
  this.board[this.rowGetter(index)][cols] = number;
  console.table(this.board);
};

Game.prototype.rowGetter = function(index) {
  return Math.floor(index / 4);
};
