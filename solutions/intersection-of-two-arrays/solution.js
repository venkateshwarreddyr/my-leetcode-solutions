// Problem: Intersection of Two Arrays
// LeetCode: https://leetcode.com/problems/intersection-of-two-arrays/
// Language: javascript
// Runtime: 64 ms
// Memory: 39.9 MB
// Submitted: 2021-06-15

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(num1set, num2set) {
    // num1set = new Set(num1set);
    // num2set = new Set(num2set);
    return [...new Set((num1set.filter(e => num2set.includes(e))))]
};
