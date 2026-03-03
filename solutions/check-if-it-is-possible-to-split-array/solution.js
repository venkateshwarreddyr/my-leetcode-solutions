// Problem: Check if it is Possible to Split Array
// LeetCode: https://leetcode.com/problems/check-if-it-is-possible-to-split-array/
// Language: javascript
// Runtime: 67 ms
// Memory: 44.3 MB
// Submitted: 2023-08-06

cl = console.log
var canSplitArray = function(a, m) {
    let s = a.reduce((a, c) => a+c, 0)
    if(a.length <= 2) return true
    for(let i=0;i<a.length-1;i++){
        if(a[i]+a[i+1]>=m) return true
    }

    return false
};
