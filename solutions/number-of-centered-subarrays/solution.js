// Problem: Number of Centered Subarrays
// LeetCode: https://leetcode.com/problems/number-of-centered-subarrays/
// Language: javascript
// Runtime: 61 ms
// Memory: 60.3 MB
// Submitted: 2026-01-11

/**
 * @param {number[]} nums
 * @return {number}
 */
var centeredSubarrays = function (nums) {
    let cc = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        let set = new Set();
        for (let j = i; j < n; j++) {
            sum += nums[j];
            set.add(nums[j]);
            if (set.has(sum)) cc++;
        }
    }

    return cc;
};

