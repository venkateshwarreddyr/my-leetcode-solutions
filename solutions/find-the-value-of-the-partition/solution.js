// Problem: Find the Value of the Partition
// LeetCode: https://leetcode.com/problems/find-the-value-of-the-partition/
// Language: javascript
// Runtime: 173 ms
// Memory: 53.6 MB
// Submitted: 2023-06-18

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(a) {
    a.sort((a,b) => a-b)
    let n = a.length;
    
    let min = Infinity
    
    for(let i=1;i<n;i++){
        min = Math.min(min, a[i]-a[i-1])
    }
    
    return min
};
