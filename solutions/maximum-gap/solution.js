// Problem: Maximum Gap
// LeetCode: https://leetcode.com/problems/maximum-gap/
// Language: javascript
// Runtime: 153 ms
// Memory: 69 MB
// Submitted: 2025-12-30

var maximumGap = function (a) {
    a.sort((a, b) => a - b);

    let maxDiff = 0;
    for (let i = 1; i < a.length; i++) {
        const diff = a[i] - a[i - 1];
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
};

