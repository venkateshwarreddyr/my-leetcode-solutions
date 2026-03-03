// Problem: Count Alternating Subarrays
// LeetCode: https://leetcode.com/problems/count-alternating-subarrays/
// Language: javascript
// Runtime: 91 ms
// Memory: 59.2 MB
// Submitted: 2024-03-31

/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(a) {
    
    let i=0, j=1;
    let n = a.length;
    let an = 0
    while(j<n) {
        if(a[j] === a[j-1]) {
            let N = j - i
            an += (N*(N+1)/2)
            i=j
        }
        j++
    }
     let N = j - i
            an += (N*(N+1)/2)
    return an
};
