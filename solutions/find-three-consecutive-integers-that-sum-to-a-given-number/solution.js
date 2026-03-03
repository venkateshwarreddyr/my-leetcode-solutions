// Problem: Find Three Consecutive Integers That Sum to a Given Number
// LeetCode: https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/
// Language: javascript
// Runtime: 65 ms
// Memory: 42 MB
// Submitted: 2023-07-18

/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
    let x = Math.trunc(num / 3)
    if (3 * x !== num) return []
    return [x - 1, x, x + 1]
};
