// Problem: Maximum Distance Between a Pair of Values
// LeetCode: https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
// Language: javascript
// Runtime: 80 ms
// Memory: 54.1 MB
// Submitted: 2023-07-13

cl = console.log
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (a, b) {
    let max = 0
    let m = a.length
    let n = b.length
    let i = 0, j = 0

    while (i < m && j < n) {
        while(a[i] <= b[j]) {
            max = Math.max(max, j - i)
            j++
        }

        i++
        j++

    }


    return max
};
