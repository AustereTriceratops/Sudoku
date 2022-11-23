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

// x in range(1, 10) y in range(1, 10);
export function coords_to_box_index(x: number, y: number): number {
    const x_ = 1 + Math.floor((x - 1)/3);
    const y_ = Math.floor((y - 1)/3);

    return x_ + 3*y_;
}