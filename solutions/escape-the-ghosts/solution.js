// Problem: Escape The Ghosts
// LeetCode: https://leetcode.com/problems/escape-the-ghosts/
// Language: javascript
// Runtime: 61 ms
// Memory: 43.5 MB
// Submitted: 2023-11-06

cl = console.log
/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {

    const dist = (x1, y1, x2, y2) => {
        // Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

        return Math.abs(x1 - x2) + Math.abs(y1 - y2)
    }

    let td = dist(0, 0, target[0], target[1])

    for (let [x, y] of ghosts) {
        if (td >= dist(target[0], target[1], x, y)) return false
    }

    return true
};
