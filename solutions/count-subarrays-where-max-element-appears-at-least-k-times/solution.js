// Problem: Count Subarrays Where Max Element Appears at Least K Times
// LeetCode: https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
// Language: javascript
// Runtime: 90 ms
// Memory: 54.8 MB
// Submitted: 2023-12-11

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(a, k) {
    let n = a.length
    let i=0,j=0
    let max = Math.max(...a)
    let maxCount = 0
    let an = 0

    while(i<n && j<n) {
            if(a[j] === max)
                maxCount++
        while(maxCount===k && i<n) {
            if(a[i] === max)
                maxCount--
            i++
        } 
         an+=(i)
        
            j++

    }

    return an
};
