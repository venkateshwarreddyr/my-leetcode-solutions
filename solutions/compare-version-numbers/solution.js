// Problem: Compare Version Numbers
// LeetCode: https://leetcode.com/problems/compare-version-numbers/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.6 MB
// Submitted: 2025-12-25

var compareVersion = function (version1, version2) {
    const a = version1.split(".").map((x) => +x);
    const b = version2.split(".").map((x) => +x);

    for (let i = 0, j = 0; i < a.length || j < b.length; i++, j++) {
        let c = a[i] ?? 0, d = b[j] ?? 0
        if (c !== d) return Math.sign(c - d);
    }

    return 0;
};

