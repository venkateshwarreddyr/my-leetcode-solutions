// Problem: Get Maximum in Generated Array
// LeetCode: https://leetcode.com/problems/get-maximum-in-generated-array/
// Language: javascript
// Runtime: 93 ms
// Memory: 38.5 MB
// Submitted: 2021-09-08

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    n+=1
    let arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    
    for(let i =1; i<n/2; i++){
        arr[2*i] = arr[i]
        arr[2*i+1] = arr[i] + arr[i+1]
    }
    return Math.max(...arr.splice(0, n))
};
