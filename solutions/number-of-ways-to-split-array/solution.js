// Problem: Number of Ways to Split Array
// LeetCode: https://leetcode.com/problems/number-of-ways-to-split-array/
// Language: javascript
// Runtime: 23 ms
// Memory: 71.1 MB
// Submitted: 2025-12-02

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    let total = 0
    let n = nums.length
    for (let i = 0; i < n; i++) {
        total += nums[i]
        nums[i] = total
    }

    console.log(nums)
    let ans = 0
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] >= total - nums[i]) {
            ans++
        }
    }

    return ans
};
