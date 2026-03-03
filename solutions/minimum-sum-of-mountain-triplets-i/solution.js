// Problem: Minimum Sum of Mountain Triplets I
// LeetCode: https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/
// Language: javascript
// Runtime: 62 ms
// Memory: 42.8 MB
// Submitted: 2023-10-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(a) {
    let n = a.length
    let min = Infinity
    for(let i=0;i<n;i++){
         for(let j=i+1;j<n;j++){
         for(let k=j+1;k<n;k++){
        if(a[i] < a[j] && a[k] < a[j]){
            min = Math.min(min, a[i]+a[j]+a[k])
        }
    }
    }
    }
    
    return min === Infinity ? -1 : min
};
