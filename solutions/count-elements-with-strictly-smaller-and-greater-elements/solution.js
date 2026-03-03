// Problem: Count Elements With Strictly Smaller and Greater Elements 
// LeetCode: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
// Language: javascript
// Runtime: 76 ms
// Memory: 40.5 MB
// Submitted: 2022-01-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    counter = 0;
    for(let num of nums){
        let smaller = false;
        let greater = false;
        for(let num1 of nums){
            if(num>num1){
                greater = true
            }else if(num1>num){
                smaller = true
            }
        }
        if(smaller && greater) counter++
    }
    return counter
};
