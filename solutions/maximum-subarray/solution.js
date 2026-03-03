// Problem: Maximum Subarray
// LeetCode: https://leetcode.com/problems/maximum-subarray/
// Language: javascript
// Runtime: 1 ms
// Memory: 63.3 MB
// Submitted: 2025-08-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let n = nums.length
    let prev = nums[0]
    let currMax = nums[0]

    for (let i = 1; i < n; i++) {
        let curr = Math.max(nums[i], prev + nums[i])
        currMax = Math.max(currMax, curr)

        prev = curr
    }

    return currMax
};
