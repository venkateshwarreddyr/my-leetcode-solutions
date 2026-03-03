// Problem: Minimum Operations to Reach Target Array
// LeetCode: https://leetcode.com/problems/minimum-operations-to-reach-target-array/
// Language: javascript
// Runtime: 24 ms
// Memory: 84.9 MB
// Submitted: 2026-01-17

var minOperations = function (nums, target) {
    let a = nums;
    let n = a.length;

    let set = new Set();
    for (let i = 0; i < n; i++) {
        if (nums[i] === target[i]) {
        } else {
            set.add(nums[i]);
        }
    }

    return set.size;
};

