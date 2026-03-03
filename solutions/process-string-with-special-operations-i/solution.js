// Problem: Process String with Special Operations I
// LeetCode: https://leetcode.com/problems/process-string-with-special-operations-i/
// Language: javascript
// Runtime: 82 ms
// Memory: 77.6 MB
// Submitted: 2025-11-08

/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let result = []

    for (let c of s) {
        if (c === '*') {
            result.pop()
        } else if (c === '#') {
            result = [...result, ...result]
        } else if (c === '%') {
            result = result.reverse()
        } else {
            result.push(c)
        }
    }

    return result.join('')
};
