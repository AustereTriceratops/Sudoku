
import {cell_index_to_coords} from "./utils"

export class Puzzle {
    grid: number[][][];
    candidates = {};

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