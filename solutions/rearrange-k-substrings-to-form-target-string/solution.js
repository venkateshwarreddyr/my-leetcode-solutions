// Problem: Rearrange K Substrings to Form Target String
// LeetCode: https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/
// Language: javascript
// Runtime: 144 ms
// Memory: 82.5 MB
// Submitted: 2025-12-13

var isPossibleToRearrange = function (s, t, k) {
    const n = s.length;
    const size = n / k;
    const map = new Map();

    for (let i = 0; i < n; i += size) {
        const a = s.slice(i, i + size);
        const b = t.slice(i, i + size);

        map.set(a, (map.get(a) ?? 0) + 1);
        map.set(b, (map.get(b) ?? 0) - 1);
    }

    return map.values().every(e => e === 0)
};

