// Problem: Stone Removal Game
// LeetCode: https://leetcode.com/problems/stone-removal-game/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.9 MB
// Submitted: 2025-10-12

/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
    let turns = 0
    let decrementBy = 10
    while (n - decrementBy >= 0) {
        n -= decrementBy
        decrementBy -= 1
        turns++
    }
    return turns % 2
};

