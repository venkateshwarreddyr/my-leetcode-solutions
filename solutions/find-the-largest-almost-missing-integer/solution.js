// Problem: Find the Largest Almost Missing Integer
// LeetCode: https://leetcode.com/problems/find-the-largest-almost-missing-integer/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.6 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function largestInteger(a, k) {
    const n = a.length;

    if (k === n) return Math.max(...a);

    if (k === 1) {
        const cnt = new Map();
        for (const x of a) cnt.set(x, (cnt.get(x) || 0) + 1);
        let ans = -1;
        for (const [x, cc] of cnt.entries()) {
            if (cc === 1 && x > ans) ans = x;
        }
        return ans;
    }

    const f = (j) => {
        for (let i = 0; i < n; i++) {
            if (i !== j && a[i] === a[j]) {
                return -1;
            }
        }
        return a[j];
    };

    return Math.max(f(0), f(n - 1));
}
