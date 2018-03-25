function Game() {
    // prettier-ignore
    this.board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];
}

Game.prototype.blankGrid = function() {
    return [
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""]
    ];
};

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
    let newGrid = this.blankGrid();
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
    this.board = this.blankGrid();
};

Game.prototype.flip = function(grid) {
    for (let i = 0; i < 4; i++) {
        grid[i].reverse();
    }
    return grid;
};

Game.prototype.flipDiagonally = function(grid) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < i; j++) {
            let array = grid[i][j];
            grid[i][j] = grid[j][i];
            grid[j][i] = array;
        }
    }
    return grid;
};

Game.prototype.test = function(grid) {
    for (let i = 4; i > 0; i--) {
        for (let j = 4; j > i; j--) {
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
