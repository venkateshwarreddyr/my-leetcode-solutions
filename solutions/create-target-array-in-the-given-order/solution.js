// Problem: Create Target Array in the Given Order
// LeetCode: https://leetcode.com/problems/create-target-array-in-the-given-order/
// Language: javascript
// Runtime: 56 ms
// Memory: 38.9 MB
// Submitted: 2021-07-24

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arr = [] //new Array(nums.length).fill(-1);
    
    for(let i = 0; i< nums.length; i++){
            arr.splice(index[i], 0, nums[i])
    }
    return arr;
};

var createTargetArray1 = function(nums, index) {
    let arr = [] //new Array(nums.length).fill(-1);
    
    for(let i = 0; i< nums.length; i++){
        if(arr[index[i]] === undefined){
            arr[index[i]] = nums[i]
        }else{
            arr.splice(index[i], 0, nums[i])
        }
    }
    return arr;
};

var createTargetArray2 = function(nums, index) {
    let arr = new Array(nums.length).fill(-1);
    
    for(let i = 0; i< nums.length; i++){
        if(arr[index[i]] !== -1){
            // arr.splice(index[i], 0, nums[i])
            for(let j = nums.length-1; j !=index[i]; j--){
                arr[j] = arr[j-1];
            }
        }
        arr[index[i]] = nums[i]
    }
    return arr;
};
