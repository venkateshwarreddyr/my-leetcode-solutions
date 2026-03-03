// Problem: Numbers With Same Consecutive Differences
// LeetCode: https://leetcode.com/problems/numbers-with-same-consecutive-differences/
// Language: javascript
// Runtime: 6 ms
// Memory: 58 MB
// Submitted: 2025-12-06

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {

    let q = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let ans = new Set()

    while (q.length) {
        let num = q.shift()
        if (num.toString().length === n) {
            ans.add(num)
            continue
        }

        let lastDigit = num % 10
        if (lastDigit - k >= 0) {
            q.push(num * 10 + lastDigit - k)
        }
        if (lastDigit + k <= 9) {
            q.push(num * 10 + lastDigit + k)
        }
    }

    return [...ans]
};
