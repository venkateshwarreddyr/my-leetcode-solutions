// Problem: Adjacent Increasing Subarrays Detection I
// LeetCode: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/
// Language: javascript
// Runtime: 74 ms
// Memory: 58.2 MB
// Submitted: 2025-10-14

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
    const n = nums.length;
    const prefixIncreasing = new Array(n);
    let s = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i - 1] < nums[i]) {
            s++;
        } else {
            s = 1;
        }
        prefixIncreasing[i] = s;
    }
    const suffixdecreasing = new Array(n);
    s = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            s++;
        } else {
            s = 1;
        }
        suffixdecreasing[i] = s;
    }

    for (let i = 0; i < n; i++) {
        if (prefixIncreasing[i] >= k && suffixdecreasing[i + 1] >= k) {
            return true;
        }
    }
    return false;
};
