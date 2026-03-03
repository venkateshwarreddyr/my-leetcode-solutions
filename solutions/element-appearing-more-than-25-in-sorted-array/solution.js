// Problem: Element Appearing More Than 25% In Sorted Array
// LeetCode: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
// Language: javascript
// Runtime: 68 ms
// Memory: 42.7 MB
// Submitted: 2023-05-26

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let n = arr.length

    let t = Math.floor(n / 4)

    let c = 1
    for (let i = 0; i < n - t; i++) {
        if (arr[i] === arr[i + t]) {
            return arr[i]
        }
    }

    return -1

};
