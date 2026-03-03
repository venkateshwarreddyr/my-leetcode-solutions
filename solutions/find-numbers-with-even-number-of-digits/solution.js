// Problem: Find Numbers with Even Number of Digits
// LeetCode: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Language: javascript
// Runtime: 53 ms
// Memory: 44.9 MB
// Submitted: 2023-03-25

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    
    for(let num of nums){
        if(num.toString().length%2 === 0){
            count++
        }
    }
    
    
    return count;
};
