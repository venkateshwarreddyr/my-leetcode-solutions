// Problem: Find if Digit Game Can Be Won
// LeetCode: https://leetcode.com/problems/find-if-digit-game-can-be-won/
// Language: javascript
// Runtime: 59 ms
// Memory: 51.3 MB
// Submitted: 2024-08-21

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(a) {
    let count = 0

    for(let e of a) {
        if(e < 10) {
            count+=e
        } else {
            count-=e
        }
    }

    return count !== 0
};
