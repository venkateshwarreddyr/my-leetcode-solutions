// Problem: Length of Longest Subarray With at Most K Frequency
// LeetCode: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
// Language: javascript
// Runtime: 148 ms
// Memory: 54.7 MB
// Submitted: 2023-12-09

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(a, k) {
    
    let n = a.length;
    let ob = {}
    let an = 0
    for(let e of a) {
        ob[e] = k
    }
    
    let i=0, j=0
    
    while(j<n && i<n) {
        if(ob[a[j]] === 0) {
            ob[a[i]]++
            i++
        } else {
            ob[a[j]]--
            j++
        }
        an = Math.max(an, j - i)
    }
    
    return an
};
