// Problem: Rearrange Array Elements by Sign
// LeetCode: https://leetcode.com/problems/rearrange-array-elements-by-sign/
// Language: javascript
// Runtime: 508 ms
// Memory: 101.1 MB
// Submitted: 2022-01-23

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let arr = []
   
    for(let i=0,j=0;i<nums.length&&j<nums.length;){
        while(nums[i]<0){
            i++
        }
        while(nums[j]>0){
            j++
        }
        arr.push(nums[i])
        arr.push(nums[j])
        i++;
        j++;
    }
    return arr
};
