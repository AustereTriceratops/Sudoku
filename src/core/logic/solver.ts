import { BOX_INDICES } from "./constants";
import { Puzzle } from "./puzzle";
import { Verifier } from "./verifier";
import { cell_index_to_coords, coords_to_box_index } from "./utils"

export class Solver {
    puzzle: Puzzle;
    veriier: Verifier;

    constructor() {
        this.puzzle = new Puzzle();
        this.veriier = new Verifier();
    }

    // columm_index and row_index are in [1, 10]
    set_candidates_for_cell_in_row(column_index: number, row_index: number, cell_index: number): void {
        for (let i = 0; i < 9; i++) {
            if (i === column_index - 1) continue;

            const selected_cell = this.puzzle.grid[i][row_index - 1];

            if (selected_cell.length === 1) {
                this.puzzle.remove_candidates(cell_index, selected_cell);
            }
        }
    }

    // columm_index and row_index are in [1, 10]
    set_candidates_for_cell_in_column(column_index: number, row_index: number, cell_index: number): void {
        for (let i = 0; i < 9; i++) {
            if (i === row_index - 1) continue;

            const selected_cell = this.puzzle.grid[column_index - 1][i];

            if (selected_cell.length === 1) {
                this.puzzle.remove_candidates(cell_index, selected_cell);
            }
        }
    }

    // columm_index and row_index are in [1, 10]
    set_candidates_for_cell_in_box(column_index: number, row_index: number, cell_index: number): void {
        const box_index = coords_to_box_index(column_index, row_index);
        const start_coords = BOX_INDICES[box_index];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const x = start_coords[0] + i;
                const y = start_coords[1] + j

                if (x + 1 === column_index && y + 1 === row_index) continue;

                const selected_cell = this.puzzle.grid[x][y];

                if (selected_cell.length === 1) {
                    this.puzzle.remove_candidates(cell_index, selected_cell)
                }
            }
        }
    }

    // columm_index and row_index are in [1, 10]
    set_candidates_for_cell(cell_index: number): void {
        // TODO: optimize index => coords conversions
        const coords = cell_index_to_coords(cell_index);

        const x = coords[0];
        const y = coords[1];

        this.puzzle.add_candidates(cell_index, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        this.set_candidates_for_cell_in_row(x, y, cell_index);
        this.set_candidates_for_cell_in_column(x, y, cell_index);
        this.set_candidates_for_cell_in_box(x, y, cell_index);
    }

    set_candidates_for_puzzle(): void {
        for (let i = 1; i < 82; i++) {
            this.set_candidates_for_cell(i);
        }
    }
}