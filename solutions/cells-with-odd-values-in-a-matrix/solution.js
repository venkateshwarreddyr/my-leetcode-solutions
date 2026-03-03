// Problem: Cells with Odd Values in a Matrix
// LeetCode: https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
// Language: javascript
// Runtime: 92 ms
// Memory: 41.6 MB
// Submitted: 2021-08-10

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    matrix = new Array(m);
    for(let i =0 ;i<matrix.length; i++){
        matrix[i] = new Array(n).fill(0)
    }

    for(let [ii, jj] of indices){
        for(let i=0; i<n;i++){
             matrix[ii][i]++;
        }
        for(let i=0; i<m;i++){
             matrix[i][jj]++;
        }
    }
    return matrix.flat().reduce((a,c) => c%2!==0?a+1:a, 0);
};
