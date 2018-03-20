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

Game.prototype.slide = function(row) {
  let noZeros = row.filter(val => val);
  let missing = 4 - noZeros.length;
  let shifted = Array(missing)
    .fill("")
    .concat(noZeros);
  return shifted;
};

Game.prototype.combine = function(row) {
  for (let i = 3; i > 0; i--) {
    let first = row[i];
    let second = row[i - 1];
    if (first === second) {
      row[i] = first + second;
      row[i - 1] = "";
    }
  }
  return row;
};

Game.prototype.slideAndCombine = function(row) {
  row = this.slide(row);
  row = this.combine(row);
  row = this.slide(row);
  return row;
};

Game.prototype.copyBoard = function(grid) {
  newGrid = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[i][j] = grid[i][j];
    }
  }
  return newGrid;
};

Game.prototype.isChange = function(a, b) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
};

Game.prototype.reset = function() {
  this.board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
};

Game.prototype.flip = function(grid) {
  for (var i = 0; i < 4; i++) {
    grid[i].reverse();
  }
  return grid;
};

//transposing

// array[0].map((col, i) => array.map(row => row[i]));

// map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.
//
// callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.
//
// or
//
// function transpose(arr,arrLen) {
//   for (var i = 0; i < arrLen; i++) {
//     for (var j = 0; j <i; j++) {
//       //swap element[i,j] and element[j,i]
//       var temp = arr[i][j];
//       arr[i][j] = arr[j][i];
//       arr[j][i] = temp;
//     }
//   }
// }
