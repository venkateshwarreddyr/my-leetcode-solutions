// Problem: Replace All Digits with Characters
// LeetCode: https://leetcode.com/problems/replace-all-digits-with-characters/
// Language: javascript
// Runtime: 98 ms
// Memory: 38.7 MB
// Submitted: 2022-01-05

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    s = s.split('')
    for(let i=1;i<s.length;i+=2){
        s[i] = String.fromCharCode(s[i-1].charCodeAt(0)+ Number(s[i]))
    }
    return s.join('')
};
