// Problem: Find Peak Element
// LeetCode: https://leetcode.com/problems/find-peak-element/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.9 MB
// Submitted: 2025-12-30

var findPeakElement = function (a) {
    let n = a.length;

    let i = 0;
    for (; i < n - 1; i++) {
        if (a[i] > a[i + 1]) {
            break;
        }
    }

    return i;
};

