// Problem: Rotate Array
// LeetCode: https://leetcode.com/problems/rotate-array/
// Language: javascript
// Runtime: 99 ms
// Memory: 51.4 MB
// Submitted: 2023-05-24

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
cl = console.log
var rotate = function (a, k) {
    let n = a.length;
    k = k % n;
    let arr = a.splice(n - k, n)
    a.unshift(...arr)
};
