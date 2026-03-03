// Problem: Kth Distinct String in an Array
// LeetCode: https://leetcode.com/problems/kth-distinct-string-in-an-array/
// Language: javascript
// Runtime: 68 ms
// Memory: 46.1 MB
// Submitted: 2023-05-11

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let n = arr.length;
    let ob = {}
    
    for(let c of arr){
        ob[c] = ++ob[c] || 1
    }
    
    for(let i=0;i<n;i++){
        if (ob[arr[i]] === 1){
            k--
        }
        
        if(!k){
            return arr[i]
        }
    }
    return ""
};
