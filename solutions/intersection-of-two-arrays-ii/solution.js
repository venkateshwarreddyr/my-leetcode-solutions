// Problem: Intersection of Two Arrays II
// LeetCode: https://leetcode.com/problems/intersection-of-two-arrays-ii/
// Language: javascript
// Runtime: 43 ms
// Memory: 48.9 MB
// Submitted: 2024-07-02

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums2, nums1) {
    return nums1.filter(e =>{
        for(let i = 0; i< nums2.length; i++){
            if(e === nums2[i]) {
                nums2[i] = -1;
                return true
                }
            
            
            
        }
    })
};
