function Game() {
  this.board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
}

Game.prototype.addNumberToBoard = function(number, index) {
  let row = Math.floor(index / 4);
  let cols = index % 4;
  this.board[row][cols] = number;
  console.table(this.board);
};
