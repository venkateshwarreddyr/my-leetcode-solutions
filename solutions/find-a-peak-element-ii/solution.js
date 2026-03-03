// Problem: Find a Peak Element II
// LeetCode: https://leetcode.com/problems/find-a-peak-element-ii/
// Language: javascript
// Runtime: 82 ms
// Memory: 54.9 MB
// Submitted: 2023-07-17

const isGreaterThanAllFourFunc = (i, j, g, mm, nn) => {
    if (i - 1 >= 0) if (g[i - 1][j] > g[i][j]) return [false, [i - 1, j]];
    if (i + 1 < mm) if (g[i + 1][j] > g[i][j]) return [false, [i + 1, j]];
    if (j - 1 >= 0) if (g[i][j - 1] > g[i][j]) return [false, [i, j - 1]];
    if (j + 1 < nn) if (g[i][j + 1] > g[i][j]) return [false, [i, j + 1]];
    return [true, [i, j]];
};

var findPeakGrid = function (g) {
    let m = g.length;
    let n = g[0].length;

    let max = -Infinity;
    let max_i = -1;
    let max_j = -1;

    let i = 0;
    for (let j = 0; j < n; j++) {
        if (g[i][j] > max) {
            max = g[i][j]; // get 1st row's max
            max_i = i; //       remember its i & j
            max_j = j;
        }
    }

    let isGreaterThanAllFour = false;
    while (!isGreaterThanAllFour) {
        [
            isGreaterThanAllFour, //   if an adjacent > g[ max_i, max_j ]
            [max_i, max_j], //         then get the new  [ max_i, max_j ], try again
        ] = isGreaterThanAllFourFunc(max_i, max_j, g, m, n);
    }
    return [max_i, max_j]; // one of the biggest
};
