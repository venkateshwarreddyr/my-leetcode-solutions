// Problem: Minimum Distance to the Target Element
// LeetCode: https://leetcode.com/problems/minimum-distance-to-the-target-element/
// Language: javascript
// Runtime: 69 ms
// Memory: 44.3 MB
// Submitted: 2023-06-01

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {

    let min = Infinity;

    let i = 0
    for (let e of nums) {
        if (target === e) {
            min = Math.min(min, Math.abs(start - i))
        }
        i++
    }

    return min
};
