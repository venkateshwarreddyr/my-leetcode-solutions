// Problem: Ant on the Boundary
// LeetCode: https://leetcode.com/problems/ant-on-the-boundary/
// Language: javascript
// Runtime: 68 ms
// Memory: 51.1 MB
// Submitted: 2024-04-09

/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(a) {
    let cc = 0
    let curr = 0

    for(let e of a) {
       curr+=e
       if(curr === 0) cc++
    }

    return cc
};
