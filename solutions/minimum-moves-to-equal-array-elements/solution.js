// Problem: Minimum Moves to Equal Array Elements
// LeetCode: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
// Language: javascript
// Runtime: 1 ms
// Memory: 58.9 MB
// Submitted: 2025-12-08

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let min = Math.min(...nums)
    let count = 0
    let n = nums.length
    for (let i = 0; i < n; i++) {
        count += (nums[i] - min)
    }

    return count
};
