// Problem: Frog Jump II
// LeetCode: https://leetcode.com/problems/frog-jump-ii/
// Language: javascript
// Runtime: 3 ms
// Memory: 67.9 MB
// Submitted: 2025-11-20

/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
    let max = 0
    let n = stones.length
    if (n === 2) {
        return stones[1] - stones[0]
    }
    for (let i = 0; i < n - 2; i++) {
        max = Math.max(
            max,
            stones[i + 1] - stones[i],
            stones[i + 2] - stones[i]
        )
    }

    return max
};
