// Problem: Check If All 1's Are at Least Length K Places Away
// LeetCode: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
// Language: javascript
// Runtime: 1 ms
// Memory: 62.2 MB
// Submitted: 2025-11-17

cl = console.log
var kLengthApart = function (a, k) {
    let n = a.length;
    let c = 0;
    let first1 = a.indexOf(1)
    for (let i = first1 + 1; i < n; i++) {
        if (a[i] === 0) {
            c++
        } else {
            if (c < k) return false;

            c = 0
        }
    }

    return true
};
