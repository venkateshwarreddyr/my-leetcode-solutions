// Problem: Count the Number of Beautiful Subarrays
// LeetCode: https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/
// Language: javascript
// Runtime: 392 ms
// Memory: 80.5 MB
// Submitted: 2023-07-07

/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (a) {
    let xor = 0
    let ob = { 0: 1 }
    let cc = 0

    for (let e of a) {
        xor ^= e

        if (ob[xor] !== undefined) {
            cc += ob[xor]
        }

        ob[xor] = ob[xor] || 0
        ob[xor]++
    }

    return cc;
};
