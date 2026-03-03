// Problem: Find All Lonely Numbers in the Array
// LeetCode: https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/
// Language: javascript
// Runtime: 418 ms
// Memory: 81.3 MB
// Submitted: 2022-01-23

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if((nums[i-1] != nums[i]-1) && (nums[i+1]!= nums[i]+1) && (nums[i-1] != nums[i]) &&  (nums[i+1]!= nums[i]) ){
            arr.push(nums[i])
        }
    }
    return arr
};
