// Problem: Maximum Erasure Value
// LeetCode: https://leetcode.com/problems/maximum-erasure-value/
// Language: javascript
// Runtime: 53 ms
// Memory: 73.6 MB
// Submitted: 2025-11-10

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (a) {

    let l = 0, r = 0
    let max_sum = 0
    let n = a.length
    let set = new Set()
    let sum = 0
    for (let r = 0; r < n; r++) {
        if (set.has(a[r]) && l < r) {
            while (set.has(a[r])) {
                sum -= a[l]
                set.delete(a[l])
                l++
            }
        }

        set.add(a[r])
        sum += a[r]

        max_sum = Math.max(max_sum, sum)
    }

    return max_sum
};
