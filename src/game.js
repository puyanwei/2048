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

Game.prototype.combine = function(array) {
  for (let i = 3; i > 0; i--) {
    let first = array[i];
    let second = array[i - 1];
    if (first === second) {
      array[i] = first + second;
      array[i - 1] = "";
    }
  }
  return array;
};
