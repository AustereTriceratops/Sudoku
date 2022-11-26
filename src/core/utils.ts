export function string_to_grid(game_str: string): number[][][] {
    const grid: number[][][] = [];

    for (let i = 0; i < 9; i++) {
        grid.push([]);

        for (let j = 0; j < 9; j++) {
            const cell_str = game_str[9 * i + j];
            const cell = parseInt(cell_str);

            if (cell_str === ".") {
                grid[i].push([]);
            } else {
                grid[i].push([cell]);
            }
        }
    }

    return grid;
}

// columm_index and row_index are in [1, 10]
export function coords_to_box_index(column_index: number, row_index: number): number {
    const x = 1 + Math.floor((column_index - 1)/3);
    const y = Math.floor((row_index - 1)/3);

    return x + 3 * y;
}

// columm_index and row_index are in [1, 10]
export function coords_to_cell_index(column_index: number, row_index: number): number {
    return column_index + 9 * (row_index - 1);
}

// cell index in [1, 81]
export function cell_index_to_coords(cell_index: number): number[] {
    const column_index = ((cell_index - 1) % 9) + 1;
    const row_index = ((cell_index - column_index) / 9) + 1;

    return [column_index, row_index];
}