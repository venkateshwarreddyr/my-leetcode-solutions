// Problem: Optimal Division
// LeetCode: https://leetcode.com/problems/optimal-division/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.8 MB
// Submitted: 2025-11-20

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
    const n = nums.length;
    if (n === 1) return `${nums[0]}`;
    if (n === 2) return `${nums[0]}/${nums[1]}`;
    return `${nums[0]}/(${nums.slice(1).join('/')})`;
};
