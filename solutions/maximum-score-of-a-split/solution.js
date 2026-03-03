// Problem: Maximum Score of a Split
// LeetCode: https://leetcode.com/problems/maximum-score-of-a-split/
// Language: javascript
// Runtime: 72 ms
// Memory: 84.8 MB
// Submitted: 2025-12-28

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumScore = function (nums) {
    let n = nums.length;
    let ps = new Array(n);
    ps[0] = nums[0];

    for (let i = 1; i < n; i++) {
        ps[i] = ps[i - 1] + nums[i];
    }

    let sufMin = new Array(n);
    sufMin[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        sufMin[i] = Math.min(sufMin[i + 1], nums[i]);
    }

    console.log(ps);
    console.log(sufMin);

    let maxScore = -Infinity;

    for (let i = 0; i < n - 1; i++) {
        maxScore = Math.max(maxScore, ps[i] - sufMin[i + 1]);
    }

    return maxScore
};

