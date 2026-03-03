// Problem: Where Will the Ball Fall
// LeetCode: https://leetcode.com/problems/where-will-the-ball-fall/
// Language: javascript
// Runtime: 66 ms
// Memory: 44.5 MB
// Submitted: 2023-07-20

cl = console.log
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (g) {
    let m = g.length;
    let n = g[0].length;

    function dfs(i, j) {
        if (i === m) return j
        if (g[i][j] === g[i][j + 1] && g[i][j] === 1) {
            return dfs(i + 1, j + 1)
        } else if (g[i][j] === g[i][j - 1] && g[i][j] === -1) {
            return dfs(i + 1, j - 1)
        }

        return -1
    }

    let i = 0
    let an = []
    for (let j = 0; j < n; j++) {
        an.push(dfs(i, j))
    }
    return an;
};

/**
[1,1,1,-1,-1],
[1,1,1,-1,-1],
[-1,-1,-1,1,1],
[1,1,1,1,-1],
[-1,-1,-1,-1,-1]

 */
