// Problem: Maximum Average Subarray I
// LeetCode: https://leetcode.com/problems/maximum-average-subarray-i/
// Language: javascript
// Runtime: 92 ms
// Memory: 55.6 MB
// Submitted: 2023-05-30

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let n = nums.length
    let avg = nums.slice(0, k).reduce((a, c) => a + c, 0)
    let maxAvg = avg / k
    for (let i = k; i < n; i++) {
        avg -= nums[i - k]
        avg += nums[i]
        maxAvg = Math.max(maxAvg, avg / k)
    }

    return maxAvg
};
