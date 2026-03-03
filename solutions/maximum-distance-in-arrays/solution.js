// Problem: Maximum Distance in Arrays
// LeetCode: https://leetcode.com/problems/maximum-distance-in-arrays/
// Language: javascript
// Runtime: 5 ms
// Memory: 73.9 MB
// Submitted: 2025-11-30

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    let distance = 0;

    for (let i = 1; i < arrays.length; i++) {
        let curr = arrays[i];
        let currMin = curr[0];
        let currMax = curr[curr.length - 1];

        distance = Math.max(
            distance,
            Math.abs(currMin - max),
            Math.abs(min - currMax),
        );

        min = Math.min(min, currMin);
        max = Math.max(max, currMax);
    }
    return distance;
};
