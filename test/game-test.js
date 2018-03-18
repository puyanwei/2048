describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe("#initialize", () => {
    it("starts with an empty array of 16", () => {
      expect(game.board.length).toEqual(4);
      expect(game.board[0].length).toEqual(4);
    });
  });

  describe("#addNumberToBoard", () => {
    it("puts a 2 or 4 on to the board", () => {
      game.addNumberToBoard(2, 3, 2);
      expect(game.board).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, 0]
      ]);
    });
  });

  describe("#isEmpty", () => {
    it("returns true if number is zero", () => {
      expect(game.isEmpty(0)).toBe(true);
      expect(game.isEmpty(2)).toBe(false);
    });
  });

  describe("#slide", () => {
    it("slides all the non zero numbers to the right", () => {
      expect(game.slide([0, 4, 0, 2])).toEqual([0, 0, 4, 2]);
    });
  });
});
