// Problem: Maximize Y‑Sum by Picking a Triplet of Distinct X‑Values
// LeetCode: https://leetcode.com/problems/maximize-ysum-by-picking-a-triplet-of-distinct-xvalues/
// Language: javascript
// Runtime: 92 ms
// Memory: 87.5 MB
// Submitted: 2025-11-12

var maxSumDistinctTriplet = function (x, y) {
    const n = x.length;
    const map = new Map();
    for (let i = 0; i < n; i++) {
        const xi = x[i],
            yi = y[i];
        if (!map.has(xi) || map.get(xi) < yi) {
            map.set(xi, yi);
        }
    }
    const ys = Array.from(map.values()).sort((a, b) => b - a);
    if (ys.length < 3) return -1;
    return ys[0] + ys[1] + ys[2];
};
