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

Game.prototype.slideRight = function() {
    let arrayRight = new Array();
    for (let i = 0; i < 4; i++) {
        let filteredValues = this.board[i].filter(val => val);
        let missing = 4 - filteredValues.length;
        let row = Array(missing)
            .fill("")
            .concat(filteredValues);
        arrayRight.push(row);
    }
    this.board = arrayRight;
    return this.board;
};

Game.prototype.slideLeft = function() {
    let arrayLeft = new Array();
    for (let i = 0; i < 4; i++) {
        let filteredValues = this.board[i].filter(val => val);
        let missing = 4 - filteredValues.length;
        let row = Array(missing).fill("");
        row = filteredValues.concat(row);
        arrayLeft.push(row);
    }
    this.board = arrayLeft;
    console.log(this.board);
    return this.board;
};

Game.prototype.combine = function(row) {
    for (let j = 3; row[i] > 0; j--) {
        let first = row[j];
        let second = row[j - 1];
        if (first === second) {
            row[j] = first + second;
            row[j - 1] = "";
        }
    }
    return grid;
};
//
// Game.prototype.slideAndCombine = function(row) {
//   row = this.slide(row);
//   row = this.combine(row);
//   row = this.slide(row);
//   return row;
// };

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
    for (let i = 0; i < 4; i++) {
        grid[i].reverse();
    }
    return grid;
};

Game.prototype.rotateAnti = function(grid) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < i; j++) {
            let array = grid[i][j];
            grid[i][j] = grid[j][i];
            grid[j][i] = array;
        }
    }
    return grid;
};

Game.prototype.reverseRows = function(grid) {
    let array = [];
    for (let i = 3; i >= 0; i--) {
        array.push(grid[i]);
    }
    grid = array;
    return grid;
};
