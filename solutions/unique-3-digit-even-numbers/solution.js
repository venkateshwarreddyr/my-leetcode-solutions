// Problem: Unique 3-Digit Even Numbers
// LeetCode: https://leetcode.com/problems/unique-3-digit-even-numbers/
// Language: javascript
// Runtime: 3 ms
// Memory: 56.6 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} digits
 * @return {number}
 */
const totalNumbers = (a) => {
    const n = a.length;

    const seen = new Set();
    for (let i = 0; i < n; i++) {
        if (a[i] % 2) continue;
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            for (let k = 0; k < n; k++) {
                if (a[k] === 0 || k === i || k === j) continue;
                seen.add(a[k] * 100 + a[j] * 10 + a[i]);
            }
        }
    }
    return seen.size;
};
