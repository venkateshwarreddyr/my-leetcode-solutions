// Problem: Maximum Number of Moves in a Grid
// LeetCode: https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
// Language: javascript
// Runtime: 191 ms
// Memory: 69.4 MB
// Submitted: 2023-05-15

var maxMoves = function (grid) {
    const dfsMatrix = (grid) => {
        let c = 0;
        sides = [
            [-1, 1],
            [0, 1],
            [1, 1], // d
        ];
        const matrixOutOfBounds = (r, c, m, n) =>
            r < 0 || c < 0 || r >= m || c >= n;
        let ans = -Infinity;
        let set = new Set();

        for (let i = 0; i < grid.length; i++) {
            let stack = [];
            let max = 0;
            stack.push([i, 0, max]);
            while (stack.length != 0) {
                let [ii, jj, an] = stack.pop();
                if (an > max) {
                    max = an;
                }
                let x = ii + ',' + jj;
                if(set.has(x)) continue;
                set.add(x)
                for (let [si, sj] of sides) {
                    if (
                        !matrixOutOfBounds(ii + si, jj + sj, grid.length, grid[0].length)
                    ) {
                        if (grid[ii + si][jj + sj] > grid[ii][jj]) {
                            stack.push([ii + si, jj + sj, an + 1]);
                        }
                    }
                }
            }
            if (max > ans) {
                ans = max
            }
        }


        return ans;
    };

    return dfsMatrix(grid);
};

