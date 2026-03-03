// Problem: Harshad Number
// LeetCode: https://leetcode.com/problems/harshad-number/
// Language: javascript
// Runtime: 53 ms
// Memory: 49 MB
// Submitted: 2024-03-31

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let b = x.toString().split('').map(e => Number(e)).reduce((a, c) => a+c, 0);
    if(x%b === 0) return b
    return -1
};
