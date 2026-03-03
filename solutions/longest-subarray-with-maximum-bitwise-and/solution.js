// Problem: Longest Subarray With Maximum Bitwise AND
// LeetCode: https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/
// Language: javascript
// Runtime: 7 ms
// Memory: 67.8 MB
// Submitted: 2025-10-24

var longestSubarray = function (a) {
    let max = Math.max(...a)

    let maxc = 0
    let c = 0
    for (let e of a) {
        if (e === max) {
            c++
            maxc = Math.max(maxc, c)
        } else {
            c = 0
        }
    }
    return maxc
};

