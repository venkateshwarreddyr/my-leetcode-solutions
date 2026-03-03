// Problem: Existence of a Substring in a String and Its Reverse
// LeetCode: https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/
// Language: javascript
// Runtime: 77 ms
// Memory: 50.1 MB
// Submitted: 2024-03-17

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    
    for(let i=0;i<s.length;i++) {
        if(s[i] === s[i-1]) return true;
        if(s[i] === s[i-2]) return true;
    }
    
    return false
};
