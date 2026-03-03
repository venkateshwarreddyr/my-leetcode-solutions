// Problem: Sum of Subarray Ranges
// LeetCode: https://leetcode.com/problems/sum-of-subarray-ranges/
// Language: javascript
// Runtime: 21 ms
// Memory: 56.5 MB
// Submitted: 2025-11-28

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (a) {
    let ans = 0
    let n = a.length
    for (let i = 0; i < n; i++) {
        let min = a[i]
        let max = a[i]
        for (let j = i + 1; j < n; j++) {
            min = Math.min(min, a[j])
            max = Math.max(max, a[j])

            ans += (max - min)
        }
    }

    return ans
};
