// Problem: Is Object Empty
// LeetCode: https://leetcode.com/problems/is-object-empty/
// Language: javascript
// Runtime: 45 ms
// Memory: 42.6 MB
// Submitted: 2023-12-13

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (key in obj) {
        return false
    }

    return true
};
