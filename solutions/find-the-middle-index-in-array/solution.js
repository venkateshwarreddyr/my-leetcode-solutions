// Problem: Find the Middle Index in Array
// LeetCode: https://leetcode.com/problems/find-the-middle-index-in-array/
// Language: javascript
// Runtime: 61 ms
// Memory: 42 MB
// Submitted: 2023-07-06

cl = console.log
/**
 * @param {number[]} a
 * @return {number}
 */
var findMiddleIndex = function (a) {
    let n = a.length;

    let psum = 0
    let ssum = 0
    for (let i = 0; i < n; i++) {
        psum += a[i]
    }


    for (let i = 0; i < n; i++) {
        psum -= a[i]
        if (psum === ssum) return i
        ssum += a[i]
    }
    return -1;
};
