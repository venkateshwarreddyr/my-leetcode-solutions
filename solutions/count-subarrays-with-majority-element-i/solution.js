// Problem: Count Subarrays With Majority Element I
// LeetCode: https://leetcode.com/problems/count-subarrays-with-majority-element-i/
// Language: javascript
// Runtime: 42 ms
// Memory: 56.7 MB
// Submitted: 2025-11-08

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let ans = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let tCount = 0;
        let s = 0;
        for (let j = i; j < n; j++) {
            s++;

            if (nums[j] === target) {
                tCount++;
            }
            if (tCount / s > 0.5) {
                ans++;
            }
        }
    }

    return ans;
};

