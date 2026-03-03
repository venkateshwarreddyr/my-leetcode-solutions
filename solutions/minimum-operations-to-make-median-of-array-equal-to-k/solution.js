// Problem: Minimum Operations to Make Median of Array Equal to K
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/
// Language: javascript
// Runtime: 187 ms
// Memory: 67.6 MB
// Submitted: 2024-04-08

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function(a, k) {
    a.sort((a, b) => a - b)
    let mid = Math.floor(a.length/2);
    
     let an = 0
    if(a[mid] === k) {}
    else if(a[mid] < k) {
        let i = mid
       while(a[i]<=k) {
           an += (k - a[i])
           i++
       }
    } else {
         let i = mid
       while(a[i]>=k) {
           an += (a[i] - k)
           i--
       }
    }
    
    return an
};
