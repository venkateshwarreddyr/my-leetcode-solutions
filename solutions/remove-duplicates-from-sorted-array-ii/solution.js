// Problem: Remove Duplicates from Sorted Array II
// LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.3 MB
// Submitted: 2022-02-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        let j=i
        while(nums[j]===nums[i]){
            if(j-i>1){
                nums.splice(j,1)
            }else{
                j++
            }
        }
    }
    return nums.length
};
