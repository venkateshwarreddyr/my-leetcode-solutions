// Problem: Maximum Score of a Good Subarray
// LeetCode: https://leetcode.com/problems/maximum-score-of-a-good-subarray/
// Language: javascript
// Runtime: 108 ms
// Memory: 58.4 MB
// Submitted: 2023-11-01

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (a, k) {
    let n = a.length
    let mina = new Array(n)
    mina[k] = a[k]
    let min = a[k]
    for (let i = k - 1; i > -1; i--) {
        mina[i] = min = Math.min(min, a[i])
    }

    min = a[k]
    for (let i = k + 1; i < n; i++) {
        mina[i] = min = Math.min(min, a[i])
    }

    cl(a, mina)

    let an = a[k]
    for (let i = 0, j = n - 1; i < j;) {
        an = Math.max(an, Math.min(mina[i], mina[j]) * (j - i + 1))

        if (mina[i] > mina[j]) {
            j--
        } else if (mina[i] < mina[j]) {
            i++
        } else {
            i++
            j--
        }
    }

    return an
};
