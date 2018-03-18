$(window).on("load", event => {
  let game = new Game();

  $("#add").on("click", () => {
    generateNumber();
    updateBoard();
  });

  function updateBoard() {
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
    let number;
    game.randomiser(2) === 0 ? (number = 2) : (number = 4);
    if (game.isEmpty(game.board[row][cols])) {
      game.addNumberToBoard(number, row, cols);
    } else {
      generateNumber();
    }
  }

  function newGame() {
    generateNumber();
    generateNumber();
  }

  newGame();
  updateBoard();
});
