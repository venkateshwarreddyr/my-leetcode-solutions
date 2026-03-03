// Problem: Transform Array by Parity
// LeetCode: https://leetcode.com/problems/transform-array-by-parity/
// Language: javascript
// Runtime: 3 ms
// Memory: 56.3 MB
// Submitted: 2025-03-01

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let n = nums.length
    for(let i = 0; i<n;i++) {
        nums[i] = (nums[i])%2 === 0 ? 0 : 1
    }

    nums.sort((a, b) => a - b)

    return nums
};
