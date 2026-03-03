// Problem: Remove Trailing Zeros From a String
// LeetCode: https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
// Language: javascript
// Runtime: 79 ms
// Memory: 46.8 MB
// Submitted: 2023-05-28

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    
    num = num.split("")
    
    while(num[num.length-1]==='0'){
        num.pop()
    }
    
    return num.join("")
};
