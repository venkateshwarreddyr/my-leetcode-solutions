// Problem: Maximum XOR After Operations 
// LeetCode: https://leetcode.com/problems/maximum-xor-after-operations/
// Language: javascript
// Runtime: 82 ms
// Memory: 50.6 MB
// Submitted: 2023-07-18

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function (a) {

    let or = 0

    for (let e of a) {
        or |= e
    }

    return or
};
