// Problem: Number of Subarrays That Match a Pattern I
// LeetCode: https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.9 MB
// Submitted: 2025-10-28

var countMatchingSubarrays = function (a, p) {
    let n = a.length
    let m = p.length
    let count = 0
    OUTER_LOOP:
    for (let i = 0; i + m + 1 - 1 < n; i++) {
        for (let j = 0; j < m; j++) {
            if (p[j] === 1) {
                if (a[i + j] < a[i + j + 1]) {
                    // good
                } else continue OUTER_LOOP
            } else if (p[j] === -1) {
                if (a[i + j] > a[i + j + 1]) {
                    // good
                } else continue OUTER_LOOP
            } else {
                if (a[i + j] === a[i + j + 1]) {
                    // good
                } else continue OUTER_LOOP
            }
        }
        count++
    }
    return count
};

