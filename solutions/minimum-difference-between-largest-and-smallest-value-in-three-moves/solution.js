// Problem: Minimum Difference Between Largest and Smallest Value in Three Moves
// LeetCode: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
// Language: javascript
// Runtime: 123 ms
// Memory: 58.2 MB
// Submitted: 2024-07-03

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    nums.sort((a, b) => a - b)
    let n = nums.length
    if (n < 4) return 0

    return Math.min(
        nums[n - 4] - nums[0],
        nums[n - 3] - nums[1],
        nums[n - 2] - nums[2],
        nums[n - 1] - nums[3]
    )
};
