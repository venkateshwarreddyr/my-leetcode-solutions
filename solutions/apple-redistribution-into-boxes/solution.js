// Problem: Apple Redistribution into Boxes
// LeetCode: https://leetcode.com/problems/apple-redistribution-into-boxes/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.2 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (a, c) {
    let sum = a.reduce((s, e) => s + e)
    c.sort((a, b) => b - a)
    let count = 0
    for (let j = 0; j < c.length; j++) {
        if (!sum) break
        count++
        if (sum >= c[j]) {
            sum -= c[j]
        } else {
            break
        }
    }
    return count
};

