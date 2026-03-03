// Problem: Largest Element in an Array after Merge Operations
// LeetCode: https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/
// Language: javascript
// Runtime: 202 ms
// Memory: 66.4 MB
// Submitted: 2023-07-23

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(a) {
    
    let n = a.length
    
    let dp = new Array(n).fill(0)
    dp[n-1] = a[n-1]
    for(let i=n-2;i>-1;i--){
        let max = Math.max(dp[i+1], a[i+1])
        let min = Math.min(dp[i+1], a[i+1])
        if(max>=a[i]){
            dp[i] = max + a[i]
        } else if(min>=a[i]){
                   dp[i] = min + a[i]
        } else {
            
        dp[i] = a[i]
        }

        }
    cl(dp)
    return Math.max(...dp)
};
