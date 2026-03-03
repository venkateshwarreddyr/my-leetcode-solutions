// Problem: Maximum Subarray Sum With Length Divisible by K
// LeetCode: https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/
// Language: javascript
// Runtime: 36 ms
// Memory: 85.3 MB
// Submitted: 2025-11-27

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
    let n = nums.length
    let pfsum = new Array(n)
    pfsum[0] = nums[0]

    for (let i = 1; i < n; i++) {
        pfsum[i] = pfsum[i - 1] + nums[i]
    }
    pfsum.unshift(0)
    let obk = new Array(k).fill(Infinity)
    obk[0] = 0
    let max = pfsum[k]
    for (let i = 1; i <= n; i++) {
        let prev = obk[i % k]
        obk[i % k] = Math.min(prev, pfsum[i])
        max = Math.max(max, pfsum[i] - prev)
    }
    return max
};
