// Problem: Maximum Element After Decreasing and Rearranging
// LeetCode: https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/
// Language: javascript
// Runtime: 84 ms
// Memory: 51.6 MB
// Submitted: 2023-11-15

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    arr.sort((a, b) => a - b);

    let curr = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > curr) {
            curr++
        }
    }

    return curr
};
