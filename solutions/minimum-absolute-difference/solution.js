// Problem: Minimum Absolute Difference
// LeetCode: https://leetcode.com/problems/minimum-absolute-difference/
// Language: javascript
// Runtime: 57 ms
// Memory: 70.2 MB
// Submitted: 2026-01-28

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a,b) => a-b);
    let min = Infinity;
    for(let i = 0; i< arr.length-1;i++){
        min = Math.min(min, arr[i+1] - arr[i])
    }
    let A = [];
    for(let i = 0; i<arr.length-1;i++){
        if(arr[i+1] - arr[i] === min){
            A.push([arr[i], arr[i+1]])
        }
    }
    return A;
};
