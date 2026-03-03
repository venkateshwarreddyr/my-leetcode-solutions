// Problem: Count Pairs Whose Sum is Less than Target
// LeetCode: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
// Language: javascript
// Runtime: 62 ms
// Memory: 43.5 MB
// Submitted: 2023-08-19

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(a, target) {
    let n = a.length
    let cc = 0
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(a[i]+a[j]<target) cc++
        }
    }
    
    return cc
};
