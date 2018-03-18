$(window).on("load", event => {
  let game = new Game();

  $("#add").on("click", () => {
    let prevBoard = game.copyBoard(game.board);
    slideRight();
    isGameOver(prevBoard);
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
