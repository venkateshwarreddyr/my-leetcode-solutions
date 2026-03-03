// Problem: Maximum Value of K Coins From Piles
// LeetCode: https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/
// Language: javascript
// Runtime: 935 ms
// Memory: 122 MB
// Submitted: 2023-11-10

cl = console.log
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
    let n = piles.length
    for (let pile of piles) {
        let n = pile.length
        let sum = 0
        for (let i = 0; i < n; i++) {
            sum += pile[i]

            pile[i] = sum
        }
    }

    let memo = Array.from({ length: n }, () => new Array(2000))
    function fn(i, rem) {
        if (rem === 0) return 0
        if (i === piles.length) return -Infinity
        if (memo[i][rem] !== undefined) return memo[i][rem]
        let j = 1
        let max = fn(i + 1, rem)
        for (let e of piles[i]) {
            max = Math.max(max, e + fn(i + 1, rem - j))
            j++
        }

        return memo[i][rem] = max
    }



    return fn(0, k)
};
