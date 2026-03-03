// Problem: Minimum String Length After Balanced Removals
// LeetCode: https://leetcode.com/problems/minimum-string-length-after-balanced-removals/
// Language: javascript
// Runtime: 5 ms
// Memory: 59.4 MB
// Submitted: 2025-11-16

/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function(s) {
    let a = 0
    let b = 0

    for(let c of s) {
        if(c === 'a') a++
        if(c === 'b') b++
    }

    return Math.abs(a - b)
};
