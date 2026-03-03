// Problem: Twisted Mirror Path Count
// LeetCode: https://leetcode.com/problems/twisted-mirror-path-count/
// Language: javascript
// Runtime: 1071 ms
// Memory: 111.8 MB
// Submitted: 2025-08-30

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function (grid) {
    let MOD = 10 ** 9 + 7;
    let m = grid.length;
    let n = grid[0].length;
    let memo = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => ({}))
    );

    const dfs = (i, j, way) => {
        if (i < 0 || j < 0 || i >= m || j >= n) return 0;
        if (i === m - 1 && j === n - 1) return 1;
        if (memo[i][j][way] !== undefined) return memo[i][j][way];
        let sum = 0;
        // logic here
        if (grid[i][j] === 1 && way === "down") {
            sum += dfs(i, j + 1, "right");
        } else if (grid[i][j] === 1 && way === "right") {
            sum += dfs(i + 1, j, "down");
        } else {
            sum += dfs(i + 1, j, "down");
            sum += dfs(i, j + 1, "right");
        }
        memo[i][j][way] = sum % MOD;
        return memo[i][j][way];
    };

    return dfs(0, 0);
};

