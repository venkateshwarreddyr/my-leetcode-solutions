// Problem: Number of Pairs of Strings With Concatenation Equal to Target
// LeetCode: https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
// Language: javascript
// Runtime: 100 ms
// Memory: 44.5 MB
// Submitted: 2021-10-02

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    counter = 0
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i!=j && nums[i]+nums[j] === target){
                counter++
            }
        }
    }
    return counter;
};
