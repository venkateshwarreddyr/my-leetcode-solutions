// Problem: Cat and Mouse
// LeetCode: https://leetcode.com/problems/cat-and-mouse/
// Language: javascript
// Runtime: 1768 ms
// Memory: 78.8 MB
// Submitted: 2023-09-20

/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function (g) {
    let n = g.length;
    let memo = Array.from({ length: 50 },
        () => Array.from({ length: 50 },
            () => new Array(4 * n + 100)));

    function dfs(c, m, step) {
        if (memo[c][m][step] !== undefined) return memo[c][m][step]
        if (step === 4 * n + 100) return 0
        if (c === m) return 2
        if (m === 0) return 1
        if (step % 2 === 0) {
            // mouse to move
            let canDraw = false
            for (let v of g[m]) {
                let an = dfs(c, v, step + 1)
                if (an === 1) {
                    memo[c][m][step] = an
                    return an
                } else if (an === 0) {
                    canDraw = true
                }
            }
            if (canDraw) {
                memo[c][m][step] = 0
                return 0
            } else {
                memo[c][m][step] = 2
                return 2
            }
        } else {
            // cat to move
            let canDraw = false
            for (let v of g[c]) {
                if (v === 0) continue
                let an = dfs(v, m, step + 1)
                if (an === 2) {
                    memo[c][m][step] = an
                    return an
                } else if (an === 0) {
                    canDraw = true
                }
            }
            if (canDraw) {
                memo[c][m][step] = 0
                return 0
            } else {
                memo[c][m][step] = 1
                return 1
            }
        }
    }

    return dfs(2, 1, 0)
};
