// Problem: Maximum Bags With Full Capacity of Rocks
// LeetCode: https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/
// Language: javascript
// Runtime: 169 ms
// Memory: 55.2 MB
// Submitted: 2023-07-22

cl = console.log
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
    let n = capacity.length
    let a = capacity.map((e, i) => e - rocks[i])
    a.sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {
        if (additionalRocks >= a[i])
            additionalRocks -= a[i]
        else
            return i
    }
    return n


};
