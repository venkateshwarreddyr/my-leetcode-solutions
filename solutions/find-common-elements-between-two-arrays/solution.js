// Problem: Find Common Elements Between Two Arrays
// LeetCode: https://leetcode.com/problems/find-common-elements-between-two-arrays/
// Language: javascript
// Runtime: 82 ms
// Memory: 44.7 MB
// Submitted: 2023-12-09

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let cc1 = 0
    let cc2 = 0
    for(let e of nums1) {
        if(nums2.includes(e)) cc1++
    }
    
    for(let e of nums2) {
        if(nums1.includes(e)) cc2++
    }
    
    return [cc1, cc2]
};
