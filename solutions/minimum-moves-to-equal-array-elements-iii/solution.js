// Problem: Minimum Moves to Equal Array Elements III
// LeetCode: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.6 MB
// Submitted: 2025-11-08

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = Math.max(...nums)

    let ans = 0

    for(let e of nums) {
        ans+=max - e
    }

    return ans
};
