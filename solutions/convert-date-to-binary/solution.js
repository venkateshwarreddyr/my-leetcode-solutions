// Problem: Convert Date to Binary
// LeetCode: https://leetcode.com/problems/convert-date-to-binary/
// Language: javascript
// Runtime: 1 ms
// Memory: 50.7 MB
// Submitted: 2024-11-25

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split('-').map(e => Number(e).toString(2)).join('-')
};
