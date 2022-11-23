import {Puzzle, Solver} from "./sudoku";
import {IMPOSSIBLE_SOLUTION_1, IMPOSSIBLE_SOLUTION_2, VALID_SOLUTION} from "./constants";


describe("Puzzle", () => {
    test("initializes empty puzzle", () => {
        const puzzle = new Puzzle();

        const grid = puzzle.grid;

        expect(grid).toHaveLength(9);

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                expect(grid[i][j]).toHaveLength(9);
            }
        }
    });

    test("initializes puzzles from strings", () => {

    });
});

describe("Solver", () => {
    let puzzle: Puzzle;
    let solver: Solver;

    beforeEach(() => {
        puzzle = new Puzzle();
        solver = new Solver();
    });

    test("can check for unfilled cells", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(solver.are_cells_filled(puzzle)).toBe(false);

        puzzle.grid = VALID_SOLUTION;
        expect(solver.are_cells_filled(puzzle)).toBe(true);
    });

    test("can check if box is unique", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(solver.is_box_unique(puzzle, 1)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(solver.is_box_unique(puzzle, 1)).toBe(true);
        expect(solver.is_box_unique(puzzle, 9)).toBe(false);

        puzzle.grid = VALID_SOLUTION;
        expect(solver.is_box_unique(puzzle, 1)).toBe(true);
        expect(solver.is_box_unique(puzzle, 9)).toBe(true);
    });

    test("can check if a row is unique", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(solver.is_row_unique(puzzle, 1)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(solver.is_row_unique(puzzle, 1)).toBe(true);
        expect(solver.is_row_unique(puzzle, 7)).toBe(false);
    });

    test("can check if column is unique", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(solver.is_column_unique(puzzle, 1)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(solver.is_column_unique(puzzle, 1)).toBe(true);
        expect(solver.is_column_unique(puzzle, 7)).toBe(false);
    });

    test("can check if a solution is valid", () => {
        puzzle.grid = IMPOSSIBLE_SOLUTION_1;
        expect(solver.is_valid_solution(puzzle)).toBe(false);

        puzzle.grid = IMPOSSIBLE_SOLUTION_2;
        expect(solver.is_valid_solution(puzzle)).toBe(false);

        puzzle.grid = VALID_SOLUTION;
        expect(solver.is_valid_solution(puzzle)).toBe(true);
    });
});
