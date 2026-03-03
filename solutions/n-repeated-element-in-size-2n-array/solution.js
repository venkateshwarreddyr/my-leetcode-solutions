// Problem: N-Repeated Element in Size 2N Array
// LeetCode: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.8 MB
// Submitted: 2026-01-02

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) return nums[i]

        obj[nums[i]] = 1
    }
    // return Object.keys(obj).filter(e => obj[e]===nums.length/2)[0]
};
