// Problem: Airplane Seat Assignment Probability
// LeetCode: https://leetcode.com/problems/airplane-seat-assignment-probability/
// Language: javascript
// Runtime: 62 ms
// Memory: 42 MB
// Submitted: 2023-07-18

/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
    if (n === 1) return 1
    return 1 / 2
};
