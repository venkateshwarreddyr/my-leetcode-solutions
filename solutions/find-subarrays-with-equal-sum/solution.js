// Problem: Find Subarrays With Equal Sum
// LeetCode: https://leetcode.com/problems/find-subarrays-with-equal-sum/
// Language: javascript
// Runtime: 55 ms
// Memory: 42.1 MB
// Submitted: 2023-05-24

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (a) {
    let n = a.length;
    let obj = {}

    for (let i = 1; i < n; i++) {
        if (obj[a[i - 1] + a[i]]) {
            return true
        } else {
            obj[a[i - 1] + a[i]] = 1
        }
    }

    return false
};
