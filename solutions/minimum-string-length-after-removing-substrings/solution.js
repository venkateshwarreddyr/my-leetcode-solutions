// Problem: Minimum String Length After Removing Substrings
// LeetCode: https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
// Language: javascript
// Runtime: 60 ms
// Memory: 45.4 MB
// Submitted: 2023-05-21

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let n = s.length;
    let stack = [];
    let obj = {
        "B": "A",
        "D": "C"
    }
    for(let i=0;i<n;i++){
        if(stack.length && obj[s[i]] === stack[stack.length-1]){
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    
    return stack.length
};
