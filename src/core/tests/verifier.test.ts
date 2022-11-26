import { Verifier } from "../verifier";
import { Puzzle } from "../puzzle";
import { IMPOSSIBLE_SOLUTION_1, IMPOSSIBLE_SOLUTION_2, VALID_SOLUTION } from "../constants";

describe("Verifier", () => {
    let puzzle: Puzzle;
    let verifier: Verifier;

    beforeEach(() => {
        puzzle = new Puzzle();
        verifier = new Verifier();
    });

    test("can check for unfilled cells", () => {
        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_1);
        expect(verifier.are_cells_filled(puzzle)).toBe(false);
        
        puzzle.set_from_grid(VALID_SOLUTION);
        expect(verifier.are_cells_filled(puzzle)).toBe(true);
    });

    test("can check if box is unique", () => {
        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_1);
        expect(verifier.is_box_unique(puzzle, 1)).toBe(false);

        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_2);
        expect(verifier.is_box_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_box_unique(puzzle, 9)).toBe(false);

        puzzle.set_from_grid(VALID_SOLUTION);
        expect(verifier.is_box_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_box_unique(puzzle, 9)).toBe(true);
    });

    test("can check if a row is unique", () => {
        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_1);
        expect(verifier.is_row_unique(puzzle, 1)).toBe(false);

        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_2);
        expect(verifier.is_row_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_row_unique(puzzle, 7)).toBe(false);
    });

    test("can check if column is unique", () => {
        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_1);
        expect(verifier.is_column_unique(puzzle, 1)).toBe(false);

        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_2);
        expect(verifier.is_column_unique(puzzle, 1)).toBe(true);
        expect(verifier.is_column_unique(puzzle, 7)).toBe(false);
    });

    test("can check if a solution is valid", () => {
        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_1);
        expect(verifier.is_valid_solution(puzzle)).toBe(false);

        puzzle.set_from_grid(IMPOSSIBLE_SOLUTION_2);
        expect(verifier.is_valid_solution(puzzle)).toBe(false);

        puzzle.set_from_grid(VALID_SOLUTION);
        expect(verifier.is_valid_solution(puzzle)).toBe(true);
    });
});