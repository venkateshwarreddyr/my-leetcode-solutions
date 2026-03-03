// Problem: Maximum Difference Between Increasing Elements
// LeetCode: https://leetcode.com/problems/maximum-difference-between-increasing-elements/
// Language: javascript
// Runtime: 65 ms
// Memory: 42.2 MB
// Submitted: 2023-05-24

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (a) {
    let n = a.length;
    let max = -1

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[j] > a[i]) {
                max = Math.max(max, a[j] - a[i])
            }
        }
    }

    return max

};
