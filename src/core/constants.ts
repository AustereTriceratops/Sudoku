export const BOX_INDICES = {
    1: [0, 0],
    2: [3, 0],
    3: [6, 0],
    4: [0, 3],
    5: [3, 3],
    6: [6, 3],
    7: [0, 6],
    8: [3, 6],
    9: [6, 6],
}

export const CANDIDATES_DICT = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
}

export const EMPTY_GRID_STR = ".................................................................................";

export const EMPTY_GRID = [
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
];

export const IMPOSSIBLE_SOLUTION_1 = [
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

export const IMPOSSIBLE_SOLUTION_1_STR = "1111111111.1111111111111111111111111111111111111111111111111111111111111111111111";

// two 4s in r7
export const IMPOSSIBLE_SOLUTION_2 = [
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

export const IMPOSSIBLE_SOLUTION_2_STR = "123456789456789213789321456897213645231645978645897132564978421978132564312564897";

export const VALID_SOLUTION = [
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

export const VALID_SOLUTION_STR = "123456789456789213789321456897213645231645978645897132564978321978132564312564897";
