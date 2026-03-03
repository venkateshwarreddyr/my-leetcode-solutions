// Problem: Longest Balanced Subarray I
// LeetCode: https://leetcode.com/problems/longest-balanced-subarray-i/
// Language: javascript
// Runtime: 281 ms
// Memory: 61.2 MB
// Submitted: 2025-10-19


var longestBalanced = function (a) {
    let max = 0;
    const n = a.length;

    for (let i = 0; i < n; i++) {
        const even = new Set();
        const odd = new Set();

        for (let j = i; j < n; j++) {
            if (a[j] % 2 === 0) {
                even.add(a[j]);
            } else {
                odd.add(a[j]);
            }
            if (even.size === odd.size) {
                max = Math.max(max, j - i + 1);
            }
        }
    }
    return max;
}

