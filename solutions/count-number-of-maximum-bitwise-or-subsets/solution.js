// Problem: Count Number of Maximum Bitwise-OR Subsets
// LeetCode: https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/
// Language: javascript
// Runtime: 89 ms
// Memory: 41.8 MB
// Submitted: 2023-07-11

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (a) {
    let cc = 0
    let maxor = 0
    let n = a.length
    function bt(j, bor) {

        if (bor > maxor) {
            cc = 1
            maxor = bor
        } else if (maxor === bor) {
            cc++
        }

        for (let i = j; i < n; i++) {
            bt(i + 1, bor | a[i])
        }
    }

    bt(0, 0)

    return cc
};
