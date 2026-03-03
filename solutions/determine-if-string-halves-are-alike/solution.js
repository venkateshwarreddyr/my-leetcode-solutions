// Problem: Determine if String Halves Are Alike
// LeetCode: https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Language: javascript
// Runtime: 56 ms
// Memory: 42.9 MB
// Submitted: 2024-01-12

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let half = s.length/2
    let c=0
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    for(let i=0;i<half;i++){
        if(vowels.has(s[i])) c++
        if(vowels.has(s[i+half])) c--
    }
    return c===0
    
};
