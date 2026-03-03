// Problem: Add Binary
// LeetCode: https://leetcode.com/problems/add-binary/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.6 MB
// Submitted: 2026-02-15

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // return ( parseInt(a, 2)+ parseInt(b, 2)).toString(2)
    if(a==="0") return b
    if(b ==="0") return a
    A = a.split('').reverse().map(e => Number(e))
    B = b.split('').reverse().map(e => Number(e))
    // C = []
    for(let i = 0; i<Math.max(B.length, A.length) ; i++){
        x = (A[i]||0)+(B[i]||0);
        if(x===2){
            B[i] = 0
            B[i+1] = 1+(B[i+1]||0)
        }
        else if(x===3){
            B[i]=1
             B[i+1] = 1+(B[i+1]||0)
        } else {
            B[i] = x
        } 
    }
    return B.reverse().join('')
};
