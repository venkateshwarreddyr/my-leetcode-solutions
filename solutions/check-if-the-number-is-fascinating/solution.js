// Problem: Check if The Number is Fascinating
// LeetCode: https://leetcode.com/problems/check-if-the-number-is-fascinating/
// Language: javascript
// Runtime: 147 ms
// Memory: 49.4 MB
// Submitted: 2023-06-10

cl = console.log
var isFascinating = function(n) {
    let d = 2*n
    let t = 3*n
    
    cl(n, d, t)
    
    let s = n + '' + d + '' + t
    cl (s)
    let set = new Set(s)
    cl (set)
    if (set.has('0')) return false
    
    if (set.size !== 9) return false

    return set.size === s.length
};

// 267
