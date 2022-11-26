import {BOX_INDICES, CANDIDATES_DICT} from "./constants";
import {cell_index_to_coords} from "./utils"

export class Puzzle {
    grid: number[][][];
    candidates = {...CANDIDATES_DICT};

    constructor() {
        this.grid = [];

        for (let i = 0; i < 9; i++) {
            this.grid.push([]);
            this.candidates[i + 1] = [];

            for (let j = 0; j < 9; j++) {
                this.grid[i].push([]);
            }

        }
    }

    remove_candidates(cell_index: number, candidates: number[]) {
        const coords = cell_index_to_coords(cell_index);
        const x = coords[0] - 1;
        const y = coords[1] - 1;

        candidates.forEach((candidate) => {
            const ind = this.grid[x][y].indexOf(candidate);
            if (ind > -1) {
                this.grid[x][y].splice(ind, 1);

                const index_in_cell_list = this.candidates[candidate].indexOf(cell_index);
                this.candidates[candidate].splice(index_in_cell_list, 1);
            }
        })
    }

    add_candidates(cell_index: number, candidates: number[]) {
        const coords = cell_index_to_coords(cell_index);
        const x = coords[0] - 1;
        const y = coords[1] - 1;

        candidates.forEach((candidate) => {
            if (!this.grid[x][y].includes(candidate)) {
                this.grid[x][y].push(candidate);
                this.candidates[candidate].push(cell_index)
            }
        })
    }
}

export class Verifier{
    // ===== SOLUTION VERIFICATION =====
    are_cells_filled(puzzle: Puzzle): boolean {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (puzzle.grid[i][j].length !== 1) {
                    return false;
                }
            }
        }

        return true;
    }

    is_box_unique(puzzle: Puzzle, box_index: number): boolean {
        const start_coords = BOX_INDICES[box_index];
        const entries: number[] = [];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++){
                const cell = puzzle.grid[start_coords[0] + i][ start_coords[1] + j];

                if (!cell || cell.length !== 1) {
                    return false;
                }

                if (entries.includes(cell[0])) {
                    return false;
                }

                entries.push(cell[0]);
            }
        }

        return true;
    }

    is_row_unique(puzzle: Puzzle, row_index: number): boolean {
        const entries: number[] = [];

        for (let i = 0; i < 9; i++) {
            const cell = puzzle.grid[i][row_index - 1]

            if (!cell || cell.length !== 1) {
                return false;
            }

            if (entries.includes(cell[0])) {
                return false;
            }

            entries.push(cell[0]);
        }

        return true;
    }

    is_column_unique(puzzle: Puzzle, column_index: number): boolean {
        const entries: number[] = [];

        for (let i = 0; i < 9; i++) {
            const cell = puzzle.grid[column_index - 1][i]

            if (!cell || cell.length !== 1) {
                return false;
            }

            if (entries.includes(cell[0])) {
                return false;
            }

            entries.push(cell[0]);
        }

        return true;
    }

    is_valid_solution(puzzle: Puzzle): boolean {
        if (!this.are_cells_filled(puzzle))  return false;

        for (let i = 1; i < 10; i++) {
            if (!this.is_row_unique(puzzle, i)) return false;
            if (!this.is_column_unique(puzzle, i)) return false;
        }

        return true;
    }

    // ===== CANDIDATE CHECKING =====

    can_box_be_filled(puzzle: Puzzle, box_index: number): boolean {
        const start_coords = BOX_INDICES[box_index];
        const entries: number[] = [];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const cell = puzzle.grid[start_coords[0] + i][start_coords[0] + j];
                cell.forEach((candidate) => {
                    if (!entries.includes(candidate)) entries.push(candidate)
                })
            }
        }

        if (entries.length === 9) {
            return true;
        } else {
            return false;
        }
    }

    can_row_be_filled(puzzle: Puzzle, row_index: number): boolean {
        const entries: number[] = [];

        for (let i = 0; i < 9; i++) {
            const cell = puzzle.grid[i][row_index - 1];

            cell.forEach((candidate) => {
                if (!entries.includes(candidate)) entries.push(candidate)
            })
        }

        if (entries.length === 9) {
            return true;
        } else {
            return false;
        }
    }

    can_column_be_filled(puzzle: Puzzle, column_index: number): boolean {
        const entries: number[] = [];

        for (let i = 0; i < 9; i++) {
            const cell = puzzle.grid[column_index -1][i];

            cell.forEach((candidate) => {
                if (!entries.includes(candidate)) entries.push(candidate)
            })
        }

        if (entries.length === 9) {
            return true;
        } else {
            return false;
        }
    }
}
