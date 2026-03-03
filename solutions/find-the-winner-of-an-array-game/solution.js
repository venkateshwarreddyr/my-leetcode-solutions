// Problem: Find the Winner of an Array Game
// LeetCode: https://leetcode.com/problems/find-the-winner-of-an-array-game/
// Language: javascript
// Runtime: 71 ms
// Memory: 51.9 MB
// Submitted: 2023-11-05

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (a, k) {
    let n = a.length
    let winner = a[0]
    let wins = 0

    for (let i = 1; i < n; i++) {
        if (winner > a[i]) {
            wins++
        }
        if (a[i] > winner) {
            wins = 1

            winner = a[i]
        }

        if (wins === k) break
    }

    return winner
};
