// Problem: Permutation Difference between Two Strings
// LeetCode: https://leetcode.com/problems/permutation-difference-between-two-strings/
// Language: javascript
// Runtime: 65 ms
// Memory: 50.4 MB
// Submitted: 2024-05-12

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let an = 0
    
    let i = 0
    for(let c of s) {
        
        an+=(Math.abs(i - t.indexOf(c)))
        
        i++
    }
    
    return an
};
