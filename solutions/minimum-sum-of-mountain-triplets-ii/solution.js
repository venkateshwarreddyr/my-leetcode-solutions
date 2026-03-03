// Problem: Minimum Sum of Mountain Triplets II
// LeetCode: https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/
// Language: javascript
// Runtime: 149 ms
// Memory: 62.8 MB
// Submitted: 2023-10-24

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(a) {
    
    let n = a.length
    
    let prefixMin = new Array(n);
    let postfixMin = new Array(n);

    let prmin = a[0]
    let pomin = a[n-1]
    for(let i=0;i<n;i++){
        prefixMin[i] = prmin = Math.min(prmin, a[i])
    }

    for(let i=n-1; i>-1; i--){
        postfixMin[i] = pomin = Math.min(pomin, a[i])
    }
    cl(prefixMin)
    cl(postfixMin)

    let minn = Infinity

    for(let i=1;i<n-1;i++){
        if(prefixMin[i] < a[i] && postfixMin[i] < a[i]){
            minn = Math.min(minn,prefixMin[i] + a[i] + postfixMin[i])
        }
    }

    return minn === Infinity ? -1 : minn
};
