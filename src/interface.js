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
  game.addNumberToBoard(2, game.randomiser(15));
  updateBoard();
});
