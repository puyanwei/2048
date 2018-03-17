describe("Game", function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#initialize", function() {
    it("starts with an empty array of 16", function() {
      expect(game.board.length).toEqual(4);
      expect(game.board[0].length).toEqual(4);
    });
  });

  describe("#addNumberToBoard", function() {
    it("puts a 2 or 4 on to the board", function() {
      game.addNumberToBoard(2, 14);
      expect(game.board).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, 0]
      ]);
    });
  });

  describe("#rowGetter", function() {
    it("gets the row number based on index", function() {
      expect(game.rowGetter(14)).toEqual(3);
    });
  });

  describe("#colGetter", function() {
    it("gets the column number based on index", function() {
      expect(game.colGetter(14)).toEqual(2);
    });
  });
});
