// Problem: Construct the Minimum Bitwise Array I
// LeetCode: https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/
// Language: javascript
// Runtime: 3 ms
// Memory: 56.4 MB
// Submitted: 2026-01-20

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
    return nums.map(e => {
        if (e === 2) return -1
        for (let i = 1; i < e; i++) {
            if((i | (i + 1)) === e) return i
        }
    })
};
