// Problem: Max Consecutive Ones
// LeetCode: https://leetcode.com/problems/max-consecutive-ones/
// Language: javascript
// Runtime: 67 ms
// Memory: 44.9 MB
// Submitted: 2023-07-07

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let cc = 0;
    for (let i of nums) {
        if (i) {
            cc++;
            if (max < cc) {
                max = cc
            }
        } else {
            cc = 0;
        }
    }

    return max;
};
