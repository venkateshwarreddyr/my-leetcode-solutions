// Problem: Find the Integer Added to Array I
// LeetCode: https://leetcode.com/problems/find-the-integer-added-to-array-i/
// Language: javascript
// Runtime: 69 ms
// Memory: 51.6 MB
// Submitted: 2024-04-28

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    return nums2[0] - nums1[0]
};
