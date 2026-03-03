// Problem: Calculate Score After Performing Instructions
// LeetCode: https://leetcode.com/problems/calculate-score-after-performing-instructions/
// Language: javascript
// Runtime: 9 ms
// Memory: 71.3 MB
// Submitted: 2025-12-13

/**
 * @param {string[]} instructions
 * @param {number[]} values
 * @return {number}
 */
var calculateScore = function (instructions, values) {
    let score = 0
    let i = 0
    let n = instructions.length
    let visited = new Array(n).fill(false)
    while (i >= 0 && i < n) {
        if (visited[i]) break
        visited[i] = true
        if (instructions[i] === 'add') {
            score += values[i]
            i++
        } else {
            // else jump
            i += values[i]
        }
    }

    return score
};
