// Problem: Find Missing Elements
// LeetCode: https://leetcode.com/problems/find-missing-elements/
// Language: javascript
// Runtime: 4 ms
// Memory: 58 MB
// Submitted: 2025-11-03

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (a) {
    let set = new Set(a)
    let min = Math.min(...a)
    let max = Math.max(...a)
    let ans = []
    for (let i = min + 1; i < max; i++) {
        if (set.has(i)) continue
        ans.push(i)
    }

    return ans
};
