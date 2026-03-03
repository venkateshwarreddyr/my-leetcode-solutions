// Problem: Isomorphic Strings
// LeetCode: https://leetcode.com/problems/isomorphic-strings/
// Language: javascript
// Runtime: 123 ms
// Memory: 41.7 MB
// Submitted: 2021-09-03

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const obj = {};
    const obj1 = {};
    for(let i =0;i<t.length;i++){
        if(!obj[s[i]])
        obj[s[i]]=t[i]
        if(!obj1[t[i]])
        obj1[t[i]]=s[i]
        if(obj[s[i]] != t[i]) return false
        if(obj1[t[i]] != s[i]) return false
    }
    return new Set(Object.keys(obj)).size === new Set(Object.values(obj)).size
};
