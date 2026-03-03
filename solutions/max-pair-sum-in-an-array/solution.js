// Problem: Max Pair Sum in an Array
// LeetCode: https://leetcode.com/problems/max-pair-sum-in-an-array/
// Language: javascript
// Runtime: 595 ms
// Memory: 51.9 MB
// Submitted: 2023-08-13

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(a) {
    let an = []
    let n = a.length
    
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let e1 = Math.max(...a[i].toString().split("").map(e => +e))
            let e2 = Math.max(...a[j].toString().split("").map(e => +e))
            
            if(e1 === e2){
                an.push(a[i]+a[j])
            }
        }
    }
    
    if(an.length)
    return Math.max(...an)
    return -1
};
