$(window).on("load", function(event) {
  var game = new Game();

  function updateBoard() {
    var cells = $("td");
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = game.board[i];
      console.log((cells[i], "GB" + game.board[i]));
    }
    console.table(game.board);
  }

  updateBoard();
});
