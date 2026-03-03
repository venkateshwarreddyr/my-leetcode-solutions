// Problem: Maximum Unique Subarray Sum After Deletion
// LeetCode: https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.4 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = (a) => {
    let max = -Infinity;
    let hasPositive = false;
    let sum = 0;
    const seen = new Set();

    for (const x of a) {
        max = Math.max(max, x);
        if (x <= 0 || seen.has(x)) continue;
        hasPositive = true;
        sum += x;
        seen.add(x);
    }

    return hasPositive ? sum : max;
};

