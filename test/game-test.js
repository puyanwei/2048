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

    describe("#blankGrid", () => {
        it("returns a blank 4 by 4 grid", () => {
            let result = game.blankGrid();
            expect(result).toEqual([
                ["", "", "", ""],
                ["", "", "", ""],
                ["", "", "", ""],
                ["", "", "", ""]
            ]);
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

    describe("#copyBoard", () => {
        it("copies the 4 by 4 board state", () => {
            let mockBoard = [
                [2, 3, 2, 2],
                [2, 2, 4, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2]
            ];
            expect(game.copyBoard(mockBoard)).toEqual([
                [2, 3, 2, 2],
                [2, 2, 4, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2]
            ]);
        });
    });

    describe("#isChange", () => {
        it("compares two 4 by 4 board states", () => {
            let mockBoardOne = [
                [2, 3, 2, 2],
                [2, 2, 4, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2]
            ];
            let mockBoardTwo = [
                [2, 3, 2, 2],
                [2, 2, 4, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2]
            ];
            expect(game.isChange(mockBoardOne, mockBoardTwo)).toBe(false);
        });
    });

    describe("#reset", () => {
        it("resets the board", () => {
            game.board = [
                [2, 3, 2, 2],
                [2, 2, 4, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2]
            ];
            game.reset();
            expect(game.board).toEqual([
                ["", "", "", ""],
                ["", "", "", ""],
                ["", "", "", ""],
                ["", "", "", ""]
            ]);
        });
    });

    describe("#flip", () => {
        it("flips the board", () => {
            game.board = [
                [0, 1, 2, 3],
                [0, 1, 2, 3],
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ];
            let flipped = game.flip(game.board);
            expect(flipped).toEqual([
                [3, 2, 1, 0],
                [3, 2, 1, 0],
                [3, 2, 1, 0],
                [3, 2, 1, 0]
            ]);
        });
    });

    describe("#rotate", () => {
        it("rotates the board anti-clockwise", () => {
            // prettier-ignore
            game.board = [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ];
            let rotatedAnti = game.rotate(game.board, "anti");
            // prettier-ignore
            expect(rotatedAnti).toEqual([
                [0, 1, 2, 3],
                [0, 1, 2, 3],
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ]);
        });
        it("rotates the board clockwise", () => {
            // prettier-ignore
            game.board = [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ];
            let rotatedClockwise = game.rotate(game.board, "clockwise");
            // prettier-ignore
            expect(rotatedClockwise).toEqual([
                [3, 2, 1, 0],
                [3, 2, 1, 0],
                [3, 2, 1, 0],
                [3, 2, 1, 0]
            ]);
        });
    });
});
