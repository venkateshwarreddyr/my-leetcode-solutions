// Problem: Diagonal Traverse
// LeetCode: https://leetcode.com/problems/diagonal-traverse/
// Language: javascript
// Runtime: 85 ms
// Memory: 49.3 MB
// Submitted: 2023-07-17

var findDiagonalOrder = function (g) {
    //                        top-left of main diagonal - start on 1st col
    //                               bottom-right of main diagonal - start on last row
    //
    // 00 01 02 03 04         00 01 02 03 04
    // 10 11 12 13 14         10 11 12 13                          14
    // 20 21 22 23 24         20 21 22                          23 24
    // 30 31 32 33 34         30 31                          32 33 34
    // 40 41 42 43 44         40                          41 42 43 44

    let m = g.length;
    let n = g[0].length;

    let ans = [];

    let directionDown = false;
    // top-left of main diagonal - start on 1st col
    for (let r = 0; r < m; r++) {
        let local_ans = [];
        let c = 0;
        for (let i = r, j = c; i >= 0 && j < n; i--, j++) {
            local_ans.push(g[i][j]);
        }
        if (directionDown) local_ans.reverse();
        directionDown = !directionDown;
        ans.push(...local_ans);
    }

    // bottom-right of main diagonal - start on last row
    for (let c = 1; c < n; c++) {
        let local_ans = [];
        let r = m - 1;
        for (let i = r, j = c; i >= 0 && j < n; i--, j++) {
            local_ans.push(g[i][j]);
        }
        if (directionDown) local_ans.reverse();
        directionDown = !directionDown;
        ans.push(...local_ans);
    }
    return ans;
}
