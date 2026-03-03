// Problem: Valid Anagram
// LeetCode: https://leetcode.com/problems/valid-anagram/
// Language: javascript
// Runtime: 80 ms
// Memory: 40.9 MB
// Submitted: 2021-08-10

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {};
    
    if(s.length!=t.length) return false;
    
    for(let i=0; i<s.length; i++){
        obj[s[i]] = (obj[s[i]]||0) +1
        obj[t[i]] = (obj[t[i]]||0) -1
    }
    
    for(let a of Object.values(obj)){
        if(a) return false
    }
    return true;
};
