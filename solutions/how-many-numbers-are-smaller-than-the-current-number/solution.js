// Problem: How Many Numbers Are Smaller Than the Current Number
// LeetCode: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// Language: javascript
// Runtime: 92 ms
// Memory: 40.4 MB
// Submitted: 2021-05-30

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newArr = [];
    for(let i = 0; i< nums.length; i++){
        let counter = 0
        for(let j=0;j<nums.length; j++){
            if(nums[i]>nums[j]){
                counter++;
            }
        }
        newArr.push(counter)
    }
    
    return newArr;
    
};
