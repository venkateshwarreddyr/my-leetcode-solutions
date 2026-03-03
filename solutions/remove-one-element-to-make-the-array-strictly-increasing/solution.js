// Problem: Remove One Element to Make the Array Strictly Increasing
// LeetCode: https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
// Language: javascript
// Runtime: 92 ms
// Memory: 44.1 MB
// Submitted: 2021-06-26

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let func = (nums) => {
        // console.log({nums})
        counter = 0
    for(let i = 0; i< nums.length-1; i++){
        if(nums[i]>=nums[i+1]) {counter++}
    }
    if(counter>0) return false;
    return true
    }
    let ind = 0
    for(let i = 0; i< nums.length; i++){
        let n = [...nums]
         // console.log({n, nums})
        n.splice(i, 1)
        if(func(n)) return true
    }
    return false;
    
};
