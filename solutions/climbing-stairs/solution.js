// Problem: Climbing Stairs
// LeetCode: https://leetcode.com/problems/climbing-stairs/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.6 MB
// Submitted: 2025-07-31

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n

    let prev = 1
    let curr = 2

    for (let i = 3; i <= n; i++) {
        let next = prev + curr

        prev = curr
        curr = next

    }

    return curr
};
