// Problem: Contiguous Array
// LeetCode: https://leetcode.com/problems/contiguous-array/
// Language: javascript
// Runtime: 61 ms
// Memory: 68.2 MB
// Submitted: 2025-11-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    nums = nums.map(e => e === 0 ? -1 : 1)
    let n = nums.length

    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1]
    }

    let ob = {
        '0': -1
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (ob[nums[i]] === undefined) {
            ob[nums[i]] = i
        } else {
            ans = Math.max(ans, i - ob[nums[i]])
        }
    }

    return ans

};
