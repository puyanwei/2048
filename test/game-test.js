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

  describe("#isEmpty", function() {
    it("returns true if number is zero", function() {
      expect(game.isEmpty(0)).toBe(true);
      expect(game.isEmpty(2)).toBe(false);
    });
  });
});
