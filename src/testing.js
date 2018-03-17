function Game() {
  this.board = Array(16).fill("");
}

Game.prototype.addNumberToBoard = function(number, index) {
  this.board[index] = number;
};
