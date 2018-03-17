$(window).on("load", function(event) {
  var game = new Game();

  function updateBoard() {
    var cells = $("td");
    for (var i = 0; i < cells.length; i++) {
      for (var rows = 0; rows < game.board[rows].length; rows++) {
        for (var cols = 0; cols < game.board[row][cols].length; cols++) {
          cells[i].innerText = game.board[rows][cols];
        }
      }
    }
  }

  updateBoard();
});
