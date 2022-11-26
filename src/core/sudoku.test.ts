import {Puzzle, Verifier} from "./sudoku";
import {IMPOSSIBLE_SOLUTION_1, IMPOSSIBLE_SOLUTION_2, VALID_SOLUTION} from "./constants";


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
        
    });
});

describe("Verifier", () => {
    let puzzle: Puzzle;
    let verifier: Verifier;

    beforeEach(() => {
        puzzle = new Puzzle();
        verifier = new Verifier();
    });

    test("can check for unfilled cells", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(verifier.are_cells_filled(puzzle)).toBe(false);

        puzzle.grid = VALID_SOLUTION;
        expect(verifier.are_cells_filled(puzzle)).toBe(true);
    });

    test("can check if box is unique", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(verifier.is_box_unique(puzzle, 1)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(verifier.is_box_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_box_unique(puzzle, 9)).toBe(false);

        puzzle.grid = VALID_SOLUTION;
        expect(verifier.is_box_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_box_unique(puzzle, 9)).toBe(true);
    });

    test("can check if a row is unique", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(verifier.is_row_unique(puzzle, 1)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(verifier.is_row_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_row_unique(puzzle, 7)).toBe(false);
    });

    test("can check if column is unique", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(verifier.is_column_unique(puzzle, 1)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(verifier.is_column_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_column_unique(puzzle, 7)).toBe(false);
    });

    test("can check if a solution is valid", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(verifier.is_valid_solution(puzzle)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(verifier.is_valid_solution(puzzle)).toBe(false);

        puzzle.grid = VALID_SOLUTION;
        expect(verifier.is_valid_solution(puzzle)).toBe(true);
    });
});
