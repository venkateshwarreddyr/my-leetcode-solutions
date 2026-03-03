// Problem: Pascal's Triangle
// LeetCode: https://leetcode.com/problems/pascals-triangle/
// Language: javascript
// Runtime: 58 ms
// Memory: 42.1 MB
// Submitted: 2023-09-08

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let A = []
    for(let i=0;i<numRows;i++){
        let arr = new Array(i+1).fill(0)
        arr[0] = 1
        arr[arr.length-1] = 1
        // console.log(A[i-1], arr, arr.lenth)
        for(let j = 1; j<arr.length-1; j++){
            // console.log(A[i-1], "hello")
            arr[j]=A[i-1][j-1]+A[i-1][j]
        }
        A.push(arr)
    }
    return A
};
