// Problem: Replace Elements with Greatest Element on Right Side
// LeetCode: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
// Language: javascript
// Runtime: 185 ms
// Memory: 51.1 MB
// Submitted: 2023-05-11

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length;
    let max = -1;
    
    for(let i=n-1; i>-1; i--){
        let num = arr[i]
        arr[i] = max;
        
        max = Math.max(num, max)
    }
    
    return arr;
};
