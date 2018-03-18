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
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", 2, ""]
      ]);
    });
  });

  describe("#isEmpty", () => {
    it("returns true if number is zero", () => {
      expect(game.isEmpty("")).toBe(true);
      expect(game.isEmpty(2)).toBe(false);
    });
  });

  describe("#slide", () => {
    it("slides all the non zero numbers to the right", () => {
      expect(game.slide(["", 4, "", 2])).toEqual(["", "", 4, 2]);
    });
  });
});
