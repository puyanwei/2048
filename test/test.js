describe("Game", function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#initialize", function() {
    it("starts with an empty array of 16", function() {
      expect(game.board.length).toEqual(16);
    });
  });

  describe("#addNumberToBoard", function() {
    it("puts a 2 or 4", function() {
      game.addNumberToBoard(2, 14);
      //prettier-ignore
      expect(game.board).toEqual(["", "", "", "", "", "", "", "", "", "", "", "", "", "", 2, ""])
    });
  });
});
