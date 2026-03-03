// Problem: Keep Multiplying Found Values by Two
// LeetCode: https://leetcode.com/problems/keep-multiplying-found-values-by-two/
// Language: javascript
// Runtime: 3 ms
// Memory: 57.1 MB
// Submitted: 2025-11-19

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    nums = nums.sort((a, b) => a - b)
    for (let num of nums) {
        if (num === original) original *= 2
    }

    return original
};
