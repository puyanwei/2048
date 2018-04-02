$(document).ready(() => {
    let game = new Game();

    $(document).keydown((event) => {
        let prevBoard = game.copyBoard(game.board);
        switch (event.which) {
            case 37: // left
                game.flip(game.board);
                game.slideRight();
                game.flip(game.board);
                break;

            case 38: // up
                game.rotate(game.board, 'clockwise');
                game.slideRight();
                game.rotate(game.board, 'anti');
                break;

            case 39: // right
                game.slideRight();
                break;

            case 40: // down
                game.rotate(game.board, 'anti');
                game.slideRight();
                game.rotate(game.board, 'clockwise');
                break;

            default:
                // event.preventDefault();
                return; // exit this handler for other keys
        }
        if (game.count === 0) {
            game.count++;
        }
        addMovesToPage();
        addScoreToPage();
        nextMove(prevBoard);
        if (game.isGameOver(game.board)) {
            sayGameOver();
        }
    });

    $('#restart').on('click', () => {
        game.reset();
        newGame();
    });

    function sayGameOver() {
        $('#game-over').text('Game Over, No more moves');
    }

    function nextMove(prevBoard) {
        let changed = game.isChange(prevBoard, game.board);
        if (changed) {
            game.count++;
            generateNumber();
            updateBoardToPage();
        }
    }

    function updateBoardToPage() {
        let cells = $('td');
        let arr = [];
        for (let rows = 0; rows < game.board.length; rows++) {
            for (let cols = 0; cols < game.board[rows].length; cols++) {
                arr.push(game.board[rows][cols]);
            }
        }
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerText = arr[i];
        }
    }

    function addScoreToPage() {
        $('#score').text(game.score);
    }

    function addMovesToPage() {
        $('#moves').text(game.count);
    }

    function generateNumber() {
        let row = game.randomiser(4);
        let cols = game.randomiser(4);
        let number = game.randomiser(2);
        number === 0 ? (number = 2) : (number = 4);
        if (game.isEmpty(game.board[row][cols])) {
            game.addNumberToBoard(number, row, cols);
        } else {
            generateNumber();
        }
    }

    function newGame() {
        generateNumber();
        generateNumber();
        updateBoardToPage();
    }

    newGame();
});
