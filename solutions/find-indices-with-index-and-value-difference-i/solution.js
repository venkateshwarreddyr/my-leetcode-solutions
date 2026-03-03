// Problem: Find Indices With Index and Value Difference I
// LeetCode: https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/
// Language: javascript
// Runtime: 53 ms
// Memory: 43.7 MB
// Submitted: 2023-10-15

/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(a, indexDifference, valueDifference) {
    let n = a.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(Math.abs(i - j)>=indexDifference && Math.abs(a[i] - a[j]) >=valueDifference) return [i, j]
        }
    }
    
    return [-1, -1]
};
