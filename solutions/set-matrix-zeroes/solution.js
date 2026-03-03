// Problem: Set Matrix Zeroes
// LeetCode: https://leetcode.com/problems/set-matrix-zeroes/
// Language: javascript
// Runtime: 100 ms
// Memory: 40.8 MB
// Submitted: 2021-12-17

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let si = new Set();
    let sj = new Set();
    
    for(let i =0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                si.add(i);
                sj.add(j);
            }
        }
    }
    
      for(let i =0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(si.has(i) || sj.has(j)) matrix[i][j] = 0
        }
    }
    return matrix;
};

var setZeroes1 = function(matrix) {
    let arr = [];
    for(let i =0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0)arr.push([i, j])
        }
    }
    
    for(let [m, n] of arr){
        for(let i =0;i<matrix[0].length;i++){
            matrix[m][i] = 0
        }
        for(let i=0;i<matrix.length;i++){
                
            matrix[i][n] = 0
        }
    }
    return matrix;
};
