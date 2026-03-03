// Problem: Maximum Number of Distinct Elements After Operations
// LeetCode: https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/
// Language: javascript
// Runtime: 138 ms
// Memory: 68.1 MB
// Submitted: 2026-01-01

var maxDistinctElements = function (nums, k) {
    nums.sort((a, b) => a - b);

    let prev = -Infinity;
    let count = 0;

    // e can move between [e-k, e+k]
    // max k+1 eles of each e?
    for (let e of nums) {
        let candidate = Math.max(e - k, prev + 1);
        if (candidate <= e + k) {
            count++;
            prev = candidate;
        }
    }

    return count;
};
