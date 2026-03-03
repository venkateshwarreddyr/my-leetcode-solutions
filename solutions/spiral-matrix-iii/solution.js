// Problem: Spiral Matrix III
// LeetCode: https://leetcode.com/problems/spiral-matrix-iii/
// Language: javascript
// Runtime: 107 ms
// Memory: 49.9 MB
// Submitted: 2023-07-09


var spiralMatrixIII = function (R, C, x, y) {

    let ans = [[x, y]];

    let requiredEleCount = R * C;
    let count = 1;
    while (ans.length < requiredEleCount) {
        // right    count times
        for (let c = 0; c < count; c++) {
            y++;
            if (x >= 0 && x < R && y >= 0 && y < C) ans.push([x, y]);
        }
        // down   count times
        for (let c = 0; c < count; c++) {
            x++;
            if (x >= 0 && x < R && y >= 0 && y < C) ans.push([x, y]);
        }
        count++
        // left   count times
        for (let c = 0; c < count; c++) {
            y--;
            if (x >= 0 && x < R && y >= 0 && y < C) ans.push([x, y]);
        }
        // up     count times
        for (let c = 0; c < count; c++) {
            x--;
            if (x >= 0 && x < R && y >= 0 && y < C) ans.push([x, y]);
        }
        count++
    }

    return ans;
};

