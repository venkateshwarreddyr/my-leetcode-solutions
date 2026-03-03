// Problem: Search Insert Position
// LeetCode: https://leetcode.com/problems/search-insert-position/
// Language: javascript
// Runtime: 152 ms
// Memory: 37.9 MB
// Submitted: 2021-07-10

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(target===nums[mid]){
            return mid
        }
        else if(target > nums[mid])  low = mid+1
        else high = mid-1
    }
    return low
};
