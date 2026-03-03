// Problem: Number of Zero-Filled Subarrays
// LeetCode: https://leetcode.com/problems/number-of-zero-filled-subarrays/
// Language: javascript
// Runtime: 11 ms
// Memory: 71.8 MB
// Submitted: 2025-08-19

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (a) {
    let cc = 0
    let an = 0
    for (let e of a) {
        if (e === 0) {
            cc++
        } else if (cc) {
            an += (cc * (cc + 1) / 2)
            cc = 0
        }
    }
    if (cc) {
        an += (cc * (cc + 1) / 2)
        cc = 0
    }
    return an;
};
