// Problem: Range Sum of Sorted Subarray Sums
// LeetCode: https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/
// Language: javascript
// Runtime: 376 ms
// Memory: 86.5 MB
// Submitted: 2023-06-28

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (a, n, left, right) {
    let an = []

    // a.sort((a, b) => a - b)
    let MOD = 10 ** 9 + 7
    for (let i = 0; i < n; i++) {
        let sum = a[i]
        an.push(sum)
        for (let j = i + 1; j < n; j++) {
            sum += a[j]
            an.push(sum)
        }
    }
    an.sort((a, b) => a - b)

    return an.slice(left - 1, right).reduce((a, c) => (a + c) % MOD, 0)
};
