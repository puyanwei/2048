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
  this.board[rows][cols] = number;
};

Game.prototype.isEmpty = function(number) {
  return number === 0;
};
