$(window).on("load", event => {
  let game = new Game();

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
    let row = game.randomiser(5);
    let cols = game.randomiser(5);
    let index = game.randomiser(2) === 0 ? (number = 2) : (number = 4);
    if (true) {
    }
  }

  function newGame() {
    generateNumber();
    generateNumber();
  }

  newGame();
  updateBoard();
});
