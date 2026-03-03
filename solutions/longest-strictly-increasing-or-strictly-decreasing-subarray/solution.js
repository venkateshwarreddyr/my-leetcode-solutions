// Problem: Longest Strictly Increasing or Strictly Decreasing Subarray
// LeetCode: https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/
// Language: javascript
// Runtime: 50 ms
// Memory: 51.3 MB
// Submitted: 2024-04-08

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(a) {
    let cc = 0;
    let maxcc = 0;
    let curr = 0;
    for(let e of a) {
        if(e > curr) {
            cc++
            maxcc = Math.max(cc, maxcc)
        } else {
            cc = 1
        }
        curr = e
        
    }
    cc = 0
    curr = 51;
    for(let e of a) {
        if(e < curr) {
            cc++
            maxcc = Math.max(cc, maxcc)
        } else {
             cc = 1
        }
        curr = e
        
    }
    
    return maxcc
};
