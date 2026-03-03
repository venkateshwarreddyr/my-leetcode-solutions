// Problem: Find Polygon With the Largest Perimeter
// LeetCode: https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/
// Language: javascript
// Runtime: 118 ms
// Memory: 73.1 MB
// Submitted: 2025-11-19

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => a - b)
    let sum = nums.reduce((a, c) => a + c, 0)

    for (let i = nums.length - 1; i > 1; i--) {
        sum -= nums[i];
        if (sum > nums[i]) {
            return sum + nums[i]
        } 
    }

    return -1
};
