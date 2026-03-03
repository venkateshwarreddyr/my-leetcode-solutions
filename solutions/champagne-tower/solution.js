// Problem: Champagne Tower
// LeetCode: https://leetcode.com/problems/champagne-tower/
// Language: javascript
// Runtime: 735 ms
// Memory: 79.4 MB
// Submitted: 2024-01-02

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
    let a = []
    for (let i = 0; i <= query_row; i++) {
        a.push(new Array(query_row + 1).fill(0));
    }
    a[0][0] = poured

    for (let row = 0; row < query_row; row++) {
        for (let glass = 0; glass <= row; glass++) {
            let excess = (a[row][glass] - 1) / 2
            if (excess > 0) {
                a[row + 1][glass] += excess
                a[row + 1][glass + 1] += excess
            }
        }
    }
    console.log(a)
    return Math.min(1, a[query_row][query_glass])
};

/**
            1   1 1 - 1
           1 1  1 1 2 - 1
          1 1 1 1 1 1 
         1 1 1 1 0  2/4 2/4 0
        1 1 1 1 1

    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
 */
