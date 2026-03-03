// Problem: Construct the Minimum Bitwise Array II
// LeetCode: https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.7 MB
// Submitted: 2026-01-21

var minBitwiseArray = function (a) {
    const n = a.length;
    const result = new Array(n).fill(-1);

    // Intuition:
    // To get a[i] from x | (x + 1), the number a[i] must end in a block of 1s.
    // To make x as small as possible, turn off highest bit in trailing block of 1s

    for (let i = 0; i < n; i++) {
        const target = a[i];
        if (target === 2) continue;

        let trailingOnesCount = 0;
        while ((target >> trailingOnesCount) & 1) {
            trailingOnesCount++;
        }

        const bitToFlip = 1 << (trailingOnesCount - 1);
        result[i] = target ^ bitToFlip;
    }

    return result;
};
