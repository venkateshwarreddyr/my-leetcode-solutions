// Problem: Largest Combination With Bitwise AND Greater Than Zero
// LeetCode: https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/
// Language: javascript
// Runtime: 148 ms
// Memory: 51.7 MB
// Submitted: 2023-07-19

cl = console.log
/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (a) {
    let maxcc = 0
    for (let i = 31; i > -1; i--) {
        let cc = 0
        for (let e of a) {
            if ((e >> i) & 1) {
                cc++
            }
        }
        maxcc = Math.max(maxcc, cc)
    }

    return maxcc;
};
