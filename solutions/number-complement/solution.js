// Problem: Number Complement
// LeetCode: https://leetcode.com/problems/number-complement/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.4 MB
// Submitted: 2021-05-30

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt(num.toString(2).split('').map(e=> e==='1'?'0':'1').join(''), 2)
};
