import {string_to_grid, coords_to_box_index} from "./utils"
import * as constants from "./constants";

describe("utils test", () => {
    test("can convert string to grid", () => {
        expect(string_to_grid(constants.EMPTY_GRID_STR)).toEqual(constants.EMPTY_GRID);
        expect(string_to_grid(constants.IMPOSSIBLE_SOLUTION_1_STR)).toEqual(constants.IMPOSSIBLE_SOLUTION_1);
        expect(string_to_grid(constants.IMPOSSIBLE_SOLUTION_2_STR)).toEqual(constants.IMPOSSIBLE_SOLUTION_2);
        expect(string_to_grid(constants.VALID_SOLUTION_STR)).toEqual(constants.VALID_SOLUTION);
    });

    test("can convert coords to a box index", () => {
        expect(coords_to_box_index(1, 1)).toEqual(1);
        expect(coords_to_box_index(3, 3)).toEqual(1);
        expect(coords_to_box_index(4, 4)).toEqual(5);
        expect(coords_to_box_index(9, 3)).toEqual(3);
        expect(coords_to_box_index(3, 9)).toEqual(7);
        expect(coords_to_box_index(9, 9)).toEqual(9);
        expect(coords_to_box_index(7, 7)).toEqual(9);
        expect(coords_to_box_index(7, 6)).toEqual(6);
    })
});