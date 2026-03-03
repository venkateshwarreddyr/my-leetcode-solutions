// Problem: Count Elements With at Least K Greater Values
// LeetCode: https://leetcode.com/problems/count-elements-with-at-least-k-greater-values/
// Language: javascript
// Runtime: 292 ms
// Memory: 95.3 MB
// Submitted: 2025-11-30

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countElements = function (nums, k) {

    nums.sort((a, b) => a - b)
    let n = nums.length
    let ob = {}
    for (let i = 0; i < n; i++) {
        ob[nums[i]] = i
    }

    let ans = 0

    for (let e of nums) {
        if (n - ob[e] - 1 >= k) ans++
    }

    return ans
};
