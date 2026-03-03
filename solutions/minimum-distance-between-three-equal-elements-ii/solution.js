// Problem: Minimum Distance Between Three Equal Elements II
// LeetCode: https://leetcode.com/problems/minimum-distance-between-three-equal-elements-ii/
// Language: javascript
// Runtime: 514 ms
// Memory: 105.4 MB
// Submitted: 2025-11-11

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {

    const a = nums.map((e, i) => [e, i])

    a.sort((a, b) => a[0] - b[0])
    let n = a.length
    let min = Infinity

    for (let i = 1; i < n - 1; i++) {
        const [prev, previ] = a[i - 1]
        const [next, nexti] = a[i + 1]
        if (prev === next) {
            min = Math.min(
                min,
                nexti
                + nexti
                - previ
                - previ
            )
        }
    }

    return min === Infinity ? -1 : min
};
