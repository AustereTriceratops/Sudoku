import { Puzzle } from "../puzzle";


describe("Puzzle", () => {
    let puzzle: Puzzle;

    beforeEach(() => {
        puzzle = new Puzzle();
    });

    test("sets candidates for empty puzzle", () => {
        expect(puzzle.grid).toHaveLength(9);

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                expect(puzzle.grid[i][j]).toHaveLength(0);
            }
        }

        for (let i = 1; i < 10; i++) {
            expect(puzzle.candidates[i]).toHaveLength(0);
        }
    });

    test("can add and remove candidates", () => {
        // test that candidates may be added
        puzzle.add_candidates(81, [1, 2, 4]);

        expect(puzzle.grid[8][8]).toEqual([1, 2, 4]);
        expect(puzzle.candidates[1]).toEqual([81]);
        expect(puzzle.candidates[2]).toEqual([81]);
        expect(puzzle.candidates[3]).toEqual([]);
        expect(puzzle.candidates[4]).toEqual([81]);

        // test that puzzles don't add candidates twice
        puzzle.add_candidates(81, [1]);

        expect(puzzle.grid[8][8]).toEqual([1, 2, 4]);
        expect(puzzle.candidates[1]).toEqual([81]);

        // test removal of a candidate
        puzzle.remove_candidates(81, [2]);

        expect(puzzle.grid[8][8]).toEqual([1, 4]);
        expect(puzzle.candidates[1]).toEqual([81]);
        expect(puzzle.candidates[2]).toEqual([]);
        expect(puzzle.candidates[4]).toEqual([81]);

        // test that nothing happens when removing a candidate that isn't there
        puzzle.remove_candidates(81, [1, 2]);

        expect(puzzle.grid[8][8]).toEqual([4]);
        expect(puzzle.candidates[1]).toEqual([]);
        expect(puzzle.candidates[2]).toEqual([]);
        expect(puzzle.candidates[4]).toEqual([81]);
    });

    test("can read a puzzle from a string", () => {
        const puzzle_string = "..........8.142.6...4.672..3.57846.2..8...57.7.......8.5.8794264..651..787642.9..";

        puzzle.set_from_string(puzzle_string);

        expect(puzzle.grid[0][0]).toEqual([]);
        expect(puzzle.grid[1][1]).toEqual([8]);
        expect(puzzle.grid[3][3]).toEqual([7]);
        expect(puzzle.grid[0][3]).toEqual([3]);
        expect(puzzle.candidates[1]).toEqual([13, 69]);
        expect(puzzle.candidates[5]).toEqual([56, 30, 68, 43]);
    });
});
