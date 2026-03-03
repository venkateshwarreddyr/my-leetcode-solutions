// Problem: Count Artifacts That Can Be Extracted
// LeetCode: https://leetcode.com/problems/count-artifacts-that-can-be-extracted/
// Language: javascript
// Runtime: 74 ms
// Memory: 94.9 MB
// Submitted: 2025-12-30

var digArtifacts = function (n, arts, dig) {
    let digSet = new Set();
    for (let [r, c] of dig) {
        digSet.add(r + "," + c);
    }

    let count = 0;
    OUTER:
    for (let [r1, c1, r2, c2] of arts) {
        for (let i = r1; i <= r2; i++)
            for (let j = c1; j <= c2; j++)
                if (!digSet.has(i + "," + j)) {
                    continue OUTER;
                }
        count++;
    }

    return count;
};

