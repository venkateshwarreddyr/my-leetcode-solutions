// Problem: Continuous Subarray Sum
// LeetCode: https://leetcode.com/problems/continuous-subarray-sum/
// Language: javascript
// Runtime: 102 ms
// Memory: 72 MB
// Submitted: 2024-06-08

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let ob = { 0: -1 }
    let sum = 0
    let i = 0
    for (let e of nums) {
        sum += e
        sum %= k

        if (ob[sum] !== undefined) {
            if (i - ob[sum] >= 2) return true
        } else {
            ob[sum] = i
        }
        i++
    }

    return false
};
