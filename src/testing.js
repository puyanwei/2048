function Game() {
  this.board = Array(16);
}

Game.prototype.addNumberToBoard = function(number, index) {
  this.board[index] = number;
};
