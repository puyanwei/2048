function Game() {
    this.score = 0;
    this.count = 0;
    // prettier-ignore
    this.board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
}

Game.prototype.blankGrid = function() {
    return [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
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
    return number === '';
};

Game.prototype.slide = function(row) {
    let noZeros = row.filter((val) => val);
    let missing = 4 - noZeros.length;
    let shifted = Array(missing)
        .fill('')
        .concat(noZeros);
    return shifted;
};

Game.prototype.combine = function(row) {
    for (let i = 3; i > 0; i--) {
        let first = row[i];
        let second = row[i - 1];
        if (first === second && first !== '' && second !== '') {
            row[i] = first + second;
            this.score += row[i];
            row[i - 1] = '';
        }
    }
    return row;
};

Game.prototype.slideRight = function() {
    for (let i = 0; i < 4; i++) {
        this.board[i] = this.slideAndCombine(this.board[i]);
    }
    return this.board;
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
    this.score = 0;
    this.count = 0;
};

Game.prototype.flip = function(grid) {
    for (let i = 0; i < 4; i++) {
        grid[i].reverse();
    }
    return grid;
};

Game.prototype.rotate = function(grid, direction) {
    let result = [];
    for (i = 0; i < grid[0].length; ++i) {
        array = [];
        for (j = 0; j < 4; ++j) {
            if (direction === 'clockwise') {
                array.push(grid[4 - j - 1][i]);
            }
            if (direction === 'anti') {
                array.push(grid[j][grid[0].length - i - 1]);
            }
        }
        result.push(array);
    }
    this.board = result;
    return result;
};

Game.prototype.isGameOver = function(grid) {
    // checks every cell for any blank ''
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === '') {
                return false;
            }
            // checks outer edges cells for duplicate numbers next to them
            if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
                return false;
            }
            if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
                return false;
            }
        }
    }
    return true;
};
