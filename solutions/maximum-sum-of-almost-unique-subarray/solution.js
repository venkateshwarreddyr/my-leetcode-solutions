// Problem: Maximum Sum of Almost Unique Subarray
// LeetCode: https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/
// Language: javascript
// Runtime: 104 ms
// Memory: 56.6 MB
// Submitted: 2023-11-02

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (a, m, k) {
    let map = new Map()
    let n = a.length
    let an = 0
    let sum = 0
    for (let i = 0; i < k; i++) {
        map.set(a[i], (map.get(a[i]) || 0) + 1)
        sum += a[i]
    }

    for (let i = k; i < n; i++) {
        if (map.size >= m) an = Math.max(an, sum)
        map.set(a[i - k], map.get(a[i - k]) - 1)
        if (!map.get(a[i - k])) map.delete(a[i - k])
        map.set(a[i], (map.get(a[i]) || 0) + 1)
        sum += a[i]
        sum -= a[i - k]
    }
    if (map.size >= m) an = Math.max(an, sum)


    return an
};
