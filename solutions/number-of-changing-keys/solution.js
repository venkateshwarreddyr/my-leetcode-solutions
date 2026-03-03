// Problem: Number of Changing Keys
// LeetCode: https://leetcode.com/problems/number-of-changing-keys/
// Language: javascript
// Runtime: 52 ms
// Memory: 51.9 MB
// Submitted: 2024-04-08

/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    s = s.toLowerCase();
    let cc = 0
    let curr = s[0]

    for(let e of s) {
        if(curr !== e) {
            curr = e
            cc++
        }
        
    }

    return cc
};
