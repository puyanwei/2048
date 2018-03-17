function Game() {
  this.board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
}

Game.prototype.addNumberToBoard = function(number, index) {
  let rows = Math.floor(index / 4);
  let cols = index % 4;
  this.board[rows][cols] = number;
  console.table(this.board);
};
