// Problem: Count Square Sum Triples
// LeetCode: https://leetcode.com/problems/count-square-sum-triples/
// Language: javascript
// Runtime: 151 ms
// Memory: 55.7 MB
// Submitted: 2025-12-08

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let A = new Array(n+1).fill(0);
    for(let i = 0;i<A.length;i++){
        A[i] = Math.pow(i,2);
    }
    let counter = 0;
    for(let i = 1;i<A.length;i++){
        for(let j = i+1; j<A.length;j++){
            if(A.includes(A[i]+A[j])) counter++
        }
    }
    return counter*2;
};
