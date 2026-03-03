// Problem: Minimum Common Value
// LeetCode: https://leetcode.com/problems/minimum-common-value/
// Language: javascript
// Runtime: 112 ms
// Memory: 49.4 MB
// Submitted: 2023-01-21

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i=0, j=0;
    
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] === nums2[j]) return nums1[i];
        if(nums1[i] > nums2[j]) j++;
        if(nums1[i] < nums2[j]) i++;
    }
    
    return -1;
//     let obj = {};
//     for(let num of nums1){
//         obj[num] = 1;
//     }
//     for(let num of nums2){
//         if(obj[num]) return num;
//     }
    
//     return -1;
    
};
