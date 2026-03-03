// Problem: Sum of Even Numbers After Queries
// LeetCode: https://leetcode.com/problems/sum-of-even-numbers-after-queries/
// Language: javascript
// Runtime: 116 ms
// Memory: 50.3 MB
// Submitted: 2023-07-12

cl = console.log
/**
 * @param {number[]} a
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (a, queries) {

    let sum = a.reduce((a, c) => a + (c % 2 === 0 ? c : 0), 0)

    let an = []

    for (let [v, i] of queries) {
        let e = a[i]

        if (e % 2 === 0) {
            if (v % 2 === 0) {
                sum += v
            } else {
                sum -= e
            }
        } else {
            if (v % 2 === 0) {
            } else {
                sum += e
                sum += v
            }
        }
        a[i] += v
        an.push(sum)
    }

    return an;


};
