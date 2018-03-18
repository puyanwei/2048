function Game() {
  // prettier-ignore
  this.board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
}

Game.prototype.addNumberToBoard = function(number, rows, cols) {
  let cell = this.board[rows][cols];
  this.board[rows][cols] = number;
};

Game.prototype.randomiser = function(limit) {
  return Math.floor(Math.random() * limit);
};

Game.prototype.isEmpty = function(number) {
  return number === "";
};

Game.prototype.slide = function(array) {
  let noZeros = array.filter(val => val);
  let missing = 4 - noZeros.length;
  let shifted = Array(missing)
    .fill("")
    .concat(noZeros);
  return shifted;
};
