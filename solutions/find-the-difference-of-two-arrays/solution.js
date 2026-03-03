// Problem: Find the Difference of Two Arrays
// LeetCode: https://leetcode.com/problems/find-the-difference-of-two-arrays/
// Language: javascript
// Runtime: 82 ms
// Memory: 49.2 MB
// Submitted: 2023-05-10

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let an = [[],[]];
    let ob1 = new Set(nums1);
    let ob2 = new Set(nums2);
    
    for(let num of nums1){
         ob2.delete(num)
    }
    
    for(let num of nums2){
        ob1.delete(num)
    }
    
    return [[...ob1], [...ob2]];
};
