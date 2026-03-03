// Problem: Minimum Number of Operations to Have Distinct Elements
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-have-distinct-elements/
// Language: javascript
// Runtime: 13 ms
// Memory: 78.1 MB
// Submitted: 2025-12-20

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let set = new Set();
    let n = nums.length;
    let lastIndex = n;
    for (let i = n - 1; i >= 0; i--) {
        if (set.has(nums[i])) {
            lastIndex = i;
            break;
        }
        set.add(nums[i]);
    }

    if (lastIndex === n) return 0;
    return Math.ceil((lastIndex + 1) / 3);
};

