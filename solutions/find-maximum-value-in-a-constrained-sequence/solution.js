// Problem: Find Maximum Value in a Constrained Sequence
// LeetCode: https://leetcode.com/problems/find-maximum-value-in-a-constrained-sequence/
// Language: javascript
// Runtime: 64 ms
// Memory: 95.4 MB
// Submitted: 2026-01-03

var findMaxVal = (n, restrictions, diff) => {
    const a = Array(n).fill(Infinity);
    a[0] = 0;

    // apply restrictions
    for (const [idx, val] of restrictions) {
        a[idx] = val;
    }

    // left to right
    for (let i = 0; i < n - 1; i++) {
        if (a[i + 1] > a[i] + diff[i]) {
            a[i + 1] = a[i] + diff[i];
        }
    }

    // right to left
    for (let i = n - 2; i >= 0; i--) {
        if (a[i] > a[i + 1] + diff[i]) {
            a[i] = a[i + 1] + diff[i];
        }
    }

    return Math.max(...a);
};

