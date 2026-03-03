// Problem: Diagonal Traverse II
// LeetCode: https://leetcode.com/problems/diagonal-traverse-ii/
// Language: javascript
// Runtime: 175 ms
// Memory: 77.2 MB
// Submitted: 2024-01-05

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (a) {
    let m = a.length
    let an = []
    let q = [[0, 0]]

    while (q.length) {
        let [r, c] = q.shift();
        an.push(a[r][c])
        if (c === 0) {

            if (r + 1 < m) {
                q.push([r + 1, c])
            }

        }
        if (c + 1 < a[r].length) {
            q.push([r, c + 1])
        }
    }
    return an;
};
