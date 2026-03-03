// Problem: Find the N-th Value After K Seconds
// LeetCode: https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/
// Language: javascript
// Runtime: 333 ms
// Memory: 51.6 MB
// Submitted: 2024-06-09

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
MOD = 10**9+7
var valueAfterKSeconds = function(n, k) {
    let a = new Array(n).fill(1)
    
    while(k--) {
        for(let i=1;i<n;i++) {
            a[i]+=a[i-1]
            a[i]%=MOD
        }
    }
    
    return a[n-1]
};
