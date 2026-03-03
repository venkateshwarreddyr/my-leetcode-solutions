// Problem: Number of Good Pairs
// LeetCode: https://leetcode.com/problems/number-of-good-pairs/
// Language: javascript
// Runtime: 68 ms
// Memory: 38.3 MB
// Submitted: 2021-05-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counter = 0;
    
    for(let i = 0; i< nums.length; i++){
        for(j = i+1; j< nums.length; j++){
            if(nums[i] === nums[j]) counter++;
        }
    }
    return counter;
};
