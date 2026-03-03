// Problem: Neither Minimum nor Maximum
// LeetCode: https://leetcode.com/problems/neither-minimum-nor-maximum/
// Language: javascript
// Runtime: 217 ms
// Memory: 50.7 MB
// Submitted: 2023-06-11

 
var findNonMinOrMax = function(a) {
    
    if(a.length <= 2 ) return -1
    
    a.sort((a,b) => a-b )
    return a[1]
    
};
