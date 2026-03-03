// Problem: Minimum Pair Removal to Sort Array I
// LeetCode: https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/
// Language: javascript
// Runtime: 3 ms
// Memory: 59.9 MB
// Submitted: 2026-01-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = (A) => {
    const isNonDecreasing = (a) => a.every((x, i) => i === 0 || a[i - 1] <= a[i]);

    let a = [...A];
    let ops = 0;
    while (!isNonDecreasing(a)) {
        let minSum = Infinity;
        let minSumIndex = 0;

        for (let i = 0; i < a.length - 1; i++) {
            const sum = a[i] + a[i + 1];
            if (sum < minSum) {
                minSum = sum;
                minSumIndex = i;
            }
        }

        const minPairSum = a[minSumIndex] + a[minSumIndex + 1];
        a = [...a.slice(0, minSumIndex), minPairSum, ...a.slice(minSumIndex + 2)];
        ops++;
    }

    return ops;
};
