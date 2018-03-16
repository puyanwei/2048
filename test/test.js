describe("Board", function() {
  let board;

  beforeEach(function() {
    board = new Board();
  });

  describe("#initialize", function() {
    it("starts with an empty array of 16", function() {
      console.log(board);
      expect(board.grid.length).toEqual(16);
    });
  });
});
