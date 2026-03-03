// Problem: Move Zeroes
// LeetCode: https://leetcode.com/problems/move-zeroes/
// Language: javascript
// Runtime: 68 ms
// Memory: 40.5 MB
// Submitted: 2021-07-10

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    if(nums.length<=1) return nums
var swap = function(i, j) {
    let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp;
}
    let i=0, j=0;
    while(i<nums.length&&j<nums.length){
        if(nums[i]===0) {
            if(i>j) j=i
            while(nums[j]===0){
                j++;
            }
        // console.log({nums,i,j})
            j<nums.length&&swap(i,j)
        }
        i++;

    }
    return nums;
};

