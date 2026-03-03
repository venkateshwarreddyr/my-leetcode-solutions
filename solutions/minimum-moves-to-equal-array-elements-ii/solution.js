// Problem: Minimum Moves to Equal Array Elements II
// LeetCode: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// Language: javascript
// Runtime: 75 ms
// Memory: 43.9 MB
// Submitted: 2023-07-26

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (a) {
    a.sort((a, b) => a - b)
    let median = Math.trunc(a.length / 2)

    let cc = 0
    for (let e of a) {
        cc += Math.abs(a[median] - e)
    }


    return cc;
};
