// Problem: Find Minimum in Rotated Sorted Array
// LeetCode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Language: javascript
// Runtime: 60 ms
// Memory: 42.3 MB
// Submitted: 2023-06-09

cl = console.log
var findMin = function (a) {
    let l = 0;
    let r = a.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (a[m] > a[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return a[l]
};
