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
      game.addNumberToBoard(2, 14);
      expect(game.board).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, 0]
      ]);
    });
    it("throws an error if the cell is already taken", () => {
      // prettier-ignore
      game.board = [
        [0, 0, 0, 0],
        [0, 2, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
      expect(() => {
        game.addNumberToBoard(2, 5);
      }).toThrow("cell already taken");
    });
  });

  describe("#isEmpty", () => {
    it("returns true if number is zero", () => {
      expect(game.isEmpty(0)).toBe(true);
      expect(game.isEmpty(2)).toBe(false);
    });
  });

  describe("#getRows", () => {
    it("gets the row number based on index", () => {
      expect(game.getRows(14)).toEqual(3);
    });
  });

  describe("#getCols", () => {
    it("gets the column number based on index", () => {
      expect(game.getCols(14)).toEqual(2);
    });
  });
});
