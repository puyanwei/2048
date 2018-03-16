describe("Board", function() {
  beforeEach(function() {
    let board = new Board();
  });

  describe("#initialize", function() {
    it("starts with an empty 4x4 nested array", function() {
      expect(board.grid.length).toEqual(16);
    });
  });
});
