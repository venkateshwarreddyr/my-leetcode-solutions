// Problem: Brick Wall
// LeetCode: https://leetcode.com/problems/brick-wall/
// Language: javascript
// Runtime: 10 ms
// Memory: 60 MB
// Submitted: 2026-01-03

var leastBricks = function (wallRows) {
    const n = wallRows.length;
    const freq = {};
    let max = 0;

    for (const row of wallRows) {
        let prefixSumEndPos = 0;
        for (let i = 0; i < row.length - 1; i++) {
            const width = row[i];
            prefixSumEndPos += width;

            freq[prefixSumEndPos] = (freq[prefixSumEndPos] ?? 0) + 1;
            max = Math.max(max, freq[prefixSumEndPos]);
        }
    }

    return n - max; // total rows - max rows ending at same position
};

