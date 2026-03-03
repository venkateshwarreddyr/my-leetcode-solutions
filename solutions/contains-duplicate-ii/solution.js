// Problem: Contains Duplicate II
// LeetCode: https://leetcode.com/problems/contains-duplicate-ii/
// Language: javascript
// Runtime: 241 ms
// Memory: 56 MB
// Submitted: 2022-01-07

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let obj = {}
     for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]!==undefined && Math.abs(i-obj[nums[i]])<=k  ){
            return true
        }else{
            obj[nums[i]] = i
        }
    }
    return false
    
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]===nums[j] && Math.abs(i-j)<=k){
    //             return true
    //         }
    //     }
    // }
    // return false
};
