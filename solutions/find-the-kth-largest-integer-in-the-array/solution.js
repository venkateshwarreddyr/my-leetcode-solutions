// Problem: Find the Kth Largest Integer in the Array
// LeetCode: https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
// Language: javascript
// Runtime: 173 ms
// Memory: 56.2 MB
// Submitted: 2023-07-13

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
    nums.sort((a, b) => (b.length - a.length) || b.localeCompare(a))

    return nums[k - 1]
};
