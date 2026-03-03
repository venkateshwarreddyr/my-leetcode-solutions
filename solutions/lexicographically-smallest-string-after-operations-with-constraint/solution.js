// Problem: Lexicographically Smallest String After Operations With Constraint
// LeetCode: https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/
// Language: javascript
// Runtime: 91 ms
// Memory: 53 MB
// Submitted: 2024-04-08

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(s, k) {
    s = s.split('').map(e => e.charCodeAt(0)-97)
    let ns = [...s]
    let i = 0
    let j = 1
    while(k && i<s.length) {
        if(ns[i] === 0) {
            i++
            j = 1
        } else {
            ns[i] = Math.min((s[i] + j) % 26, (s[i] - j + 26)%26)
            j++
            k--
        }
        
    }
    
    return ns.map(e => String.fromCharCode(e+97)).join('')
};
