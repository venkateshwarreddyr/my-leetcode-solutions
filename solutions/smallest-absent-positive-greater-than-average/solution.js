// Problem: Smallest Absent Positive Greater Than Average
// LeetCode: https://leetcode.com/problems/smallest-absent-positive-greater-than-average/
// Language: javascript
// Runtime: 12 ms
// Memory: 63.2 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function (a) {
    let sum = a.reduce((s, x) => s + x, 0)
    let avg = sum / a.length
    let avgTr = Math.trunc(avg)
    let targetFindVal = Math.max(avgTr, 0) + 1
    let set = new Set(a)
    while (set.has(targetFindVal)) targetFindVal++
    return targetFindVal
}
