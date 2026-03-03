// Problem: Number of Adjacent Elements With the Same Color
// LeetCode: https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/
// Language: javascript
// Runtime: 258 ms
// Memory: 108.4 MB
// Submitted: 2023-11-08

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
    let a = new Array(n).fill(0)
    let numOfAdj = 0

    let an = []
    for (let [i, c] of queries) {
        if (a[i] !== c) {
            let left = a[i - 1]
            let right = a[i + 1]

            if (a[i]) {
                if (left === a[i]) {
                    numOfAdj -= 1
                }
                if (right === a[i]) {
                    numOfAdj -= 1
                }
            }

            a[i] = c
            if (left === a[i]) {
                numOfAdj += 1
            }
            if (right === a[i]) {
                numOfAdj += 1
            }
        }


        an.push(numOfAdj)
    }

    return an;
};
