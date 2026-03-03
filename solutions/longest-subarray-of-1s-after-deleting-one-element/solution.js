// Problem: Longest Subarray of 1's After Deleting One Element
// LeetCode: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
// Language: javascript
// Runtime: 3 ms
// Memory: 59.8 MB
// Submitted: 2025-08-24

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (a) {
    let n = a.length;
    let pones = 0
    let ones = 0
    let max = 0
    let haszeros = 0
    for (let e of a) {
        if (e) {
            ones++
        } else {
            pones = ones
            ones = 0
            haszeros = 1
        }
        if (haszeros)
            max = Math.max(max, ones + pones)
        else
            max = Math.max(max, ones - 1)
    }

    return max;
};
