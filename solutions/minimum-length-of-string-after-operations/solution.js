// Problem: Minimum Length of String After Operations
// LeetCode: https://leetcode.com/problems/minimum-length-of-string-after-operations/
// Language: javascript
// Runtime: 261 ms
// Memory: 61.4 MB
// Submitted: 2024-08-21

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let ob = {}

    for(let c of s) {
        ob[c] = ob[c] || 0
        ob[c]++
    }
    let an = 0
    for(let key in ob) {
        let v = ob[key]
        if(v%2 === 0) {
            an+=2
        } else {
            an+=1
        }
    }

    return an
};
