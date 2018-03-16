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
});
