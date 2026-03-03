// Problem: Ways to Split Array Into Good Subarrays
// LeetCode: https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/
// Language: javascript
// Runtime: 166 ms
// Memory: 61.3 MB
// Submitted: 2023-06-25

var numberOfGoodSubarraySplits = function(a) {
    // let cl = console.log
    let n = a.length
    
    let sinc = 0
    let z = 0
    let zs = []
    for (let i=0; i<n; i++) {
        if (a[i]) {
            if(sinc) {
                if(z) {
                    zs.push(z)
                }                
                sinc = 1
                z = 0
            } else {
                sinc = 1
                z = 0
            }
        } else {
            z++
        }
    }
    // cl (zs)
    
    if(!zs.length) {
        if (sinc) return 1
        return 0
    }
    
    zs = zs.map(x => x+1)
    // cl(zs)
    
    const MOD = 10**9 + 7

    let m = 1
    for (let z of zs) {
        m = m*z
        m = m%MOD
    }
    return m
};

