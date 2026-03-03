// Problem: Merge Two 2D Arrays by Summing Values
// LeetCode: https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
// Language: javascript
// Runtime: 89 ms
// Memory: 46.1 MB
// Submitted: 2023-05-11

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let ob = {}
    
    for(let [id, val] of nums1){
        ob[id] = (ob[id] || 0) + val
    }
        
    for(let [id, val] of nums2){
        ob[id] = (ob[id] || 0) + val
    }
    
    return Object.entries(ob)
};
