// Problem: Maximize Expression of Three Elements
// LeetCode: https://leetcode.com/problems/maximize-expression-of-three-elements/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.5 MB
// Submitted: 2025-11-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
    nums.sort((a, b) => a - b)

    return nums.pop() + nums.pop() - nums.shift()
};
