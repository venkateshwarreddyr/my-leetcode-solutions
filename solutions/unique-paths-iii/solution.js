// Problem: Unique Paths III
// LeetCode: https://leetcode.com/problems/unique-paths-iii/
// Language: javascript
// Runtime: 69 ms
// Memory: 46.1 MB
// Submitted: 2023-07-15

cl = console.log
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {

    let m = grid.length;
    let n = grid[0].length;

    let cc = 0;
    sides = [
        [0, -1], //   W
        [-1, 0], //   N
        [0, 1], //    E
        [1, 0], //    S
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    let visitedinpath = new Set()
    const dfsMatrix = (i, j) => {
        let x = i + "," + j
        if (visitedinpath.has(x)) return;
        if (grid[i][j] === 2) {
            if (visitedinpath.size === m * n - 1)
                cc++;
            return;
        }
        visitedinpath.add(x)
        for (let [si, sj] of sides) {
            if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                let xx = (i + si) + "" + (j + sj)
                if (visitedinpath.has(xx)) continue;
                if (grid[i + si][j + sj] >= 0) {
                    dfsMatrix(i + si, j + sj);
                }
            }
        }
        visitedinpath.delete(x)
    };
    let fn = null
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fn = () => dfsMatrix(i, j)
            } else if (grid[i][j] === -1) {
                let x = i + "," + j
                visitedinpath.add(x)
            }
        }
    }
    fn()
    return cc
};  
