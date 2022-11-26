import { Verifier } from "../verifier";
import { Solver } from "../solver";
import { coords_to_cell_index } from "../utils";

describe("Solver", () => {
    let verifier: Verifier;
    let solver: Solver;

    beforeEach(() => {
        verifier = new Verifier();
        solver = new Solver();
    });

    test("can set candidates for a cell by row logic", () => {
        solver.puzzle.add_candidates(20, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

        solver.puzzle.add_candidates(19, [1]);
        solver.puzzle.add_candidates(21, [8]);
        solver.puzzle.add_candidates(23, [9]);
        solver.puzzle.add_candidates(24, [7]);
        solver.puzzle.add_candidates(27, [6]);

        solver.set_candidates_for_cell_in_row(2, 3, 20);
        expect(solver.puzzle.grid[1][2]).toEqual([2, 3, 4, 5])
    })

    test("can set candidates for a cell by column logic", () => {
        solver.puzzle.add_candidates(16, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

        solver.puzzle.add_candidates(7, [1]);
        solver.puzzle.add_candidates(25, [6]);
        solver.puzzle.add_candidates(34, [9]);
        solver.puzzle.add_candidates(52, [7]);
        solver.puzzle.add_candidates(70, [2]);

        solver.set_candidates_for_cell_in_column(7, 2, coords_to_cell_index(7, 2));
        expect(solver.puzzle.grid[6][1]).toEqual([3, 4, 5, 8])
    })

    test("can set candidates for a cell by box logic", () => {
        solver.puzzle.add_candidates(12, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

        solver.puzzle.add_candidates(1, [7]);
        solver.puzzle.add_candidates(2, [6]);
        solver.puzzle.add_candidates(3, [3]);
        solver.puzzle.add_candidates(11, [2]);
        solver.puzzle.add_candidates(20, [5]);

        solver.set_candidates_for_cell_in_box(3, 2, coords_to_cell_index(3, 2));
        expect(solver.puzzle.grid[2][1]).toEqual([1, 4, 8, 9])
    })

    test("fills candidates for an empty puzzle", () => {
        solver.set_candidates_for_puzzle();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                expect(solver.puzzle.grid[i][j]).toHaveLength(9);
            }
        }

        // I can jjust throw this into the other loop above but I think that might be too confusing to parse
        for (let i = 1; i < 10; i++) {
            expect(solver.puzzle.candidates[i]).toHaveLength(81);
        }
    });

    test("fills candidates for a given cell", () => {
        solver.puzzle.add_candidates(1, [1]);
        solver.puzzle.add_candidates(2, [2]);
        solver.puzzle.add_candidates(14, [4]);
        solver.puzzle.add_candidates(15, [5]);
        solver.puzzle.add_candidates(19, [3]);
        solver.puzzle.add_candidates(21, [8]);
        solver.puzzle.add_candidates(47, [6]);
        solver.puzzle.add_candidates(65, [7]);

        solver.set_candidates_for_cell(11);

        expect(solver.puzzle.grid[1][1]).toEqual([9]);
    });
});