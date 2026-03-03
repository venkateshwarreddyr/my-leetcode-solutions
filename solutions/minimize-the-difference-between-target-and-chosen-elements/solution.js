// Problem: Minimize the Difference Between Target and Chosen Elements
// LeetCode: https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/
// Language: javascript
// Runtime: 3195 ms
// Memory: 54.9 MB
// Submitted: 2023-07-26

/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function (g, t) {
    let gset = new Set(g[0])

    let m = g.length
    let n = g[0].length

    for (let i = 1; i < m; i++) {
        let set = new Set()
        for (let j = 0; j < n; j++) {
            for (let e of gset) {
                set.add(e + g[i][j])
            }
        }

        gset = set;
    }

    let min = Infinity

    for (let e of gset) {
        min = Math.min(min, Math.abs(e - t))
    }

    return min
};
