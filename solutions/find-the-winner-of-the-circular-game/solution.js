// Problem: Find the Winner of the Circular Game
// LeetCode: https://leetcode.com/problems/find-the-winner-of-the-circular-game/
// Language: javascript
// Runtime: 70 ms
// Memory: 55.6 MB
// Submitted: 2024-07-08

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    cl = console.log
    let a = new Array(n).fill().map((_, i) => i + 1);

    while (a.length !== 1) {
        let len = a.length
        let i = (k - 1 + len) % len
        a = a.slice(i + 1).concat(a.slice(0, i))
    }

    return a[0]

};
