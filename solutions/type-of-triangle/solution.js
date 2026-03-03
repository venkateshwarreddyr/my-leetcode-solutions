// Problem: Type of Triangle
// LeetCode: https://leetcode.com/problems/type-of-triangle/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.4 MB
// Submitted: 2025-10-11

/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    let [a, b, c] = nums
    if (a + b <= c) return "none"
    if (b + c <= a) return "none"
    if (c + a <= b) return "none"
    if (a === b && b === c) return "equilateral"
    if (a === b || b === c || c === a) return "isosceles"
    return "scalene"
};
