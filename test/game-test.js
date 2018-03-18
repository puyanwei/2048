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

  describe("#combine", () => {
    it("combines numbers if they are the same and they are next to each other", () => {
      expect(game.combine(["", "", 4, 4])).toEqual(["", "", "", 8]);
      expect(game.combine(["", "", 2, 2])).toEqual(["", "", "", 4]);
      expect(game.combine(["", "", 2, 4])).toEqual(["", "", 2, 4]);
    });
  });

  describe("#slideAndCombine", () => {
    it("slides, then combines, then slides the array", () => {
      expect(game.slideAndCombine([2, 2, 2, 2])).toEqual(["", "", 4, 4]);
      expect(game.slideAndCombine([0, 2, 2, 4])).toEqual(["", "", 4, 4]);
      expect(game.slideAndCombine([2, 4, 2, 2])).toEqual(["", 2, 4, 4]);
    });
  });
});
