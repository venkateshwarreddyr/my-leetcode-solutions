// Problem: Count the Digits That Divide a Number
// LeetCode: https://leetcode.com/problems/count-the-digits-that-divide-a-number/
// Language: javascript
// Runtime: 117 ms
// Memory: 42.1 MB
// Submitted: 2023-01-04

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    
    for(let n=num;n;n=Math.floor(n/10)){
        count += (num%(n%10)) === 0
    }
    
    return count;
};
