// Problem: Check if Every Row and Column Contains All Numbers
// LeetCode: https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
// Language: javascript
// Runtime: 140 ms
// Memory: 46.7 MB
// Submitted: 2022-01-09

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    n =  matrix.length
    ar = [(n*(n+1))/2]
    for(let i=0;i<matrix.length;i++){
        let set = new Set()
        let sum = 0
        for(let j=0;j<matrix.length;j++){
            set.add(matrix[i][j])
            sum += matrix[i][j]
        }
        if(set.size !== matrix.length) return false
        ar.push(sum)
    }
    for(let i=0;i<matrix.length;i++){
        let sum = 0
        let set = new Set()
        for(let j=0;j<matrix.length;j++){
            sum += matrix[j][i]
            set.add(matrix[j][i])
        }
         if(set.size !== matrix.length) return false
        ar.push(sum)
    }
    // sum.sort((a,b) => a-b)
    for(let i=0;i<ar.length-1;i++){
        if(ar[i]!=ar[i+1]) return false
    }
    return true
};
