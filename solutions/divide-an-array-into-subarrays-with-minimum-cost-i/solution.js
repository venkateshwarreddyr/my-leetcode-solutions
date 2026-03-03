// Problem: Divide an Array Into Subarrays With Minimum Cost I
// LeetCode: https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/
// Language: javascript
// Runtime: 72 ms
// Memory: 53.3 MB
// Submitted: 2024-10-04

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    let [a, ...nnums] = nums;
    nnums.sort((a, b) => a - b)
    return a + nnums[0] + nnums[1]
};
