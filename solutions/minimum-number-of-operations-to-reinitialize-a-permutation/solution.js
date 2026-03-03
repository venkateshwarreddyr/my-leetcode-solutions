// Problem: Minimum Number of Operations to Reinitialize a Permutation
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/
// Language: javascript
// Runtime: 218 ms
// Memory: 48.9 MB
// Submitted: 2023-07-20

cl = console.log
/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
    let perm = Array.from({ length: n }, (e, i) => i)
    let initial = perm.toString()
    let a = new Array(n)
    let cc = 0
    while (a.toString() !== initial) {
        cc++
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0)
                a[i] = perm[i / 2]
            else
                a[i] = perm[n / 2 + (i - 1) / 2]
        }

        perm = [...a]
    }

    return cc
};
