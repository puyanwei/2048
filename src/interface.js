$(window).on("load", event => {
  let game = new Game();

  $(document).keydown(function(e) {
    let prevBoard = game.copyBoard(game.board);
    switch (e.which) {
      case 37: // left
        game.flip(game.board);
        slideRight();
        game.flip(game.board);
        break;

      case 38: // up
        game.rotateAnti(game.board);
        slideRight();
        game.rotateAnti(game.board);
        break;

      case 39: // right
        slideRight();
        break;

      case 40: // down
        game.rotateClockwise(game.board);
        slideRight();
        game.rotateClockwise(game.board);
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault();
    isGameOver(prevBoard);
  });

  $("#restart").on("click", () => {
    game.reset();
    newGame();
  });

  function slideRight() {
    for (let i = 0; i < 4; i++) {
      game.board[i] = game.slideAndCombine(game.board[i]);
    }
  }

  function isGameOver(prevBoard) {
    let changed = game.isChange(prevBoard, game.board);
    if (changed) {
      generateNumber();
      updateBoardToPage();
    } else {
      console.log("game over");
    }
  }

  function updateBoardToPage() {
    let cells = $("td");
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
