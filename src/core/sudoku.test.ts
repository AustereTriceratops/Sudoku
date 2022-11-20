import {Puzzle, Solver} from "./sudoku";

const impossible_solution_1 = [
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1], [1], [1], [1], [1]],
];

// two 4s in r7
const impossible_solution_2 = [
    [[1], [2], [3], [4], [5], [6], [7], [8], [9]],
    [[4], [5], [6], [7], [8], [9], [2], [1], [3]],
    [[7], [8], [9], [3], [2], [1], [4], [5], [6]],
    [[8], [9], [7], [2], [1], [3], [6], [4], [5]],
    [[2], [3], [1], [6], [4], [5], [9], [7], [8]],
    [[6], [4], [5], [8], [9], [7], [1], [3], [2]],
    [[5], [6], [4], [9], [7], [8], [4], [2], [1]],
    [[9], [7], [8], [1], [3], [2], [5], [6], [4]],
    [[3], [1], [2], [5], [6], [4], [8], [9], [7]],
];

const valid_solution = [
    [[1], [2], [3], [4], [5], [6], [7], [8], [9]],
    [[4], [5], [6], [7], [8], [9], [2], [1], [3]],
    [[7], [8], [9], [3], [2], [1], [4], [5], [6]],
    [[8], [9], [7], [2], [1], [3], [6], [4], [5]],
    [[2], [3], [1], [6], [4], [5], [9], [7], [8]],
    [[6], [4], [5], [8], [9], [7], [1], [3], [2]],
    [[5], [6], [4], [9], [7], [8], [3], [2], [1]],
    [[9], [7], [8], [1], [3], [2], [5], [6], [4]],
    [[3], [1], [2], [5], [6], [4], [8], [9], [7]],
];


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
        puzzle.grid = impossible_solution_1;
        expect(solver.are_cells_filled(puzzle)).toBe(false);

        puzzle.grid = valid_solution;
        expect(solver.are_cells_filled(puzzle)).toBe(true);
    });

    test("can check if box is unique", () => {
        puzzle.grid = impossible_solution_1;
        expect(solver.is_box_unique(puzzle, 1)).toBe(false);

        puzzle.grid = impossible_solution_2;
        expect(solver.is_box_unique(puzzle, 1)).toBe(true);
        expect(solver.is_box_unique(puzzle, 9)).toBe(false);

        puzzle.grid = valid_solution;
        expect(solver.is_box_unique(puzzle, 1)).toBe(true);
        expect(solver.is_box_unique(puzzle, 9)).toBe(true);
    });

    test("can check if a row is unique", () => {
        puzzle.grid = impossible_solution_1;
        expect(solver.is_row_unique(puzzle, 1)).toBe(false);

        puzzle.grid = impossible_solution_2;
        expect(solver.is_row_unique(puzzle, 1)).toBe(true);
        expect(solver.is_row_unique(puzzle, 7)).toBe(false);
    });

    test("can check if column is unique", () => {
        puzzle.grid = impossible_solution_1;
        expect(solver.is_column_unique(puzzle, 1)).toBe(false);

        puzzle.grid = impossible_solution_2;
        expect(solver.is_column_unique(puzzle, 1)).toBe(true);
        expect(solver.is_column_unique(puzzle, 7)).toBe(false);
    });

    test("can check if a solution is valid", () => {
        puzzle.grid = impossible_solution_1;
        expect(solver.is_valid_solution(puzzle)).toBe(false);

        puzzle.grid = impossible_solution_2;
        expect(solver.is_valid_solution(puzzle)).toBe(false);

        puzzle.grid = valid_solution;
        expect(solver.is_valid_solution(puzzle)).toBe(true);
    });
});
