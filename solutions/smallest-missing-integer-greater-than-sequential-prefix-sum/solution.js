// Problem: Smallest Missing Integer Greater Than Sequential Prefix Sum
// LeetCode: https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/
// Language: javascript
// Runtime: 52 ms
// Memory: 42.6 MB
// Submitted: 2024-01-06

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(a) {
 return Math.max(...a) + 1   
}
var missingInteger = function(a) {
    // a = [...new Set(a.sort((a, b) => a-b))]
    let n = a.length
    let start = 0
    let longestPrefix = 0
    let prefix = 0
    let prefixSum = a[0]
    let longestPrefixSum = a[0]
    for(let i = 1;i<n;i++) {
        if(a[i] === a[i-1] + 1) {
            prefixSum+=a[i]
            prefix++
        }
        else {
            break
        }
        // if(prefix>longestPrefix) longestPrefixSum = prefixSum
        if(prefix>=longestPrefix) longestPrefixSum = Math.max(longestPrefixSum, prefixSum)
        longestPrefix = Math.max(prefix, longestPrefix)
    }
        // if(prefix>longestPrefix) longestPrefixSum = prefixSum
        if(prefix>=longestPrefix) longestPrefixSum = Math.max(longestPrefixSum, prefixSum)
    
    if(!a.includes(longestPrefixSum)) return longestPrefixSum
    
    for(let e = longestPrefixSum + 1;e<=20000;e++){
        if(!a.includes(e)) return e
    }
};
