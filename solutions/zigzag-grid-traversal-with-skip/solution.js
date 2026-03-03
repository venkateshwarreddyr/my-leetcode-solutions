// Problem: Zigzag Grid Traversal With Skip
// LeetCode: https://leetcode.com/problems/zigzag-grid-traversal-with-skip/
// Language: javascript
// Runtime: 0 ms
// Memory: 52.8 MB
// Submitted: 2025-01-12

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let an = [];
    let j = 0;
    let move_right = true;
    for (let i = 0; i < m; i++) {
        while (true) {
            an.push(grid[i][j]);
            if (move_right) {
                j += 2;
            } else {
                j -= 2;
            }
            if (j >= n) {
                move_right = false;
            } else if (j < 0) {
                move_right = true;
            }

            if(j === n) {
                j--
                break
            } else if( j === n + 1) {
                j-=3
                  break
            } else if (j === -1) {
                j++
                  break
            } else if (j === -2) {
                j+=3
                  break
            }
        }
    }

    return an;
};

