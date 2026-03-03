// Problem: Subarray Sum Equals K
// LeetCode: https://leetcode.com/problems/subarray-sum-equals-k/
// Language: javascript
// Runtime: 33 ms
// Memory: 65.4 MB
// Submitted: 2025-08-16

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let ob = { 0: 1 }
    let sum = 0
    let cc = 0

    for (let num of nums) {
        sum += num
        cc += (ob[sum - k] ?? 0)
        ob[sum] = (ob[sum] ?? 0) + 1
    }

    return cc;
};
