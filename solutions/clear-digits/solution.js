// Problem: Clear Digits
// LeetCode: https://leetcode.com/problems/clear-digits/
// Language: javascript
// Runtime: 67 ms
// Memory: 51.2 MB
// Submitted: 2024-06-08

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = []
    
    for(let e of s) {
        if("0123456789".includes(e)) {
            stack.pop()
        } else {
            stack.push(e)
        }
    }
    
    return stack.join("")
};
