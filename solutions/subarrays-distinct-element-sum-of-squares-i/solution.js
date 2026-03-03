// Problem: Subarrays Distinct Element Sum of Squares I
// LeetCode: https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
// Language: javascript
// Runtime: 190 ms
// Memory: 47.9 MB
// Submitted: 2023-10-28

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(a) {
    
    let an = 0
    
    let n = a.length
    
    for(let i=1;i<=n;i++){
        
        for(let j=0;j<n;j++){
            let set = new Set()
            if(i+j <= n)
            for(let k=j;k<i+j;k++){
                set.add(a[k])
            }
            an+=(set.size *set.size)
        }
    }

    return an;
};
