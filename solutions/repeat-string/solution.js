// Problem: Repeat String
// LeetCode: https://leetcode.com/problems/repeat-string/
// Language: javascript
// Runtime: 72 ms
// Memory: 59.9 MB
// Submitted: 2024-05-01

/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function(times) {
    let s = ""
    while(times--) {
        s+=this
    }

    return s
}
