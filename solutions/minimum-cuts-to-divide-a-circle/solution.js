// Problem: Minimum Cuts to Divide a Circle
// LeetCode: https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/
// Language: javascript
// Runtime: 69 ms
// Memory: 42.2 MB
// Submitted: 2022-12-24

/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    if(n===1) return 0;
    if(n%2===1) return n
    return n/2
};
