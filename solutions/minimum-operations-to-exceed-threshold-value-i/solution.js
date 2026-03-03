// Problem: Minimum Operations to Exceed Threshold Value I
// LeetCode: https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/
// Language: javascript
// Runtime: 54 ms
// Memory: 51.4 MB
// Submitted: 2024-04-08

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a, b) => a-b);

    let cc = 0
    for(let e of nums) {
        if(e>=k) return cc
        cc++
    }

    return cc
};
