// Problem: Sum of Matrix After Queries
// LeetCode: https://leetcode.com/problems/sum-of-matrix-after-queries/
// Language: javascript
// Runtime: 246 ms
// Memory: 74.5 MB
// Submitted: 2023-06-04

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
    let s = 0
    let dprow = new Set()
    let dpcol = new Set()
    for (let [type, index, val] of queries.reverse()) {
        if (type === 0) {
            if(dprow.has(index)) continue;
            dprow.add(index)
            s += (val * (n - dpcol.size))
        } else {
            if(dpcol.has(index)) continue;
            dpcol.add(index)
            s += (val * (n - dprow.size))
        }
    }



    return s
};
