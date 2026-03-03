// Problem: Pascal's Triangle II
// LeetCode: https://leetcode.com/problems/pascals-triangle-ii/
// Language: javascript
// Runtime: 59 ms
// Memory: 42.5 MB
// Submitted: 2023-10-16

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(numRows) {
    let A = []
    for(let i=0;i<numRows+1;i++){
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
    return A[numRows]
};
