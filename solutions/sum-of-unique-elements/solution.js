// Problem: Sum of Unique Elements
// LeetCode: https://leetcode.com/problems/sum-of-unique-elements/
// Language: javascript
// Runtime: 56 ms
// Memory: 40.2 MB
// Submitted: 2021-07-17

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique1 = function(nums) {
        let count = 0;
    for(let x of nums){
        nums.filter(e => e===x).length===1 ? count+=x : null
    }
    return count
};
var sumOfUnique = function(nums) {
        let obj = {};
    for(let x of nums){
       obj[x] = obj[x]?obj[x]+1:1
    }
    return Object.keys(obj).filter(e => obj[e]===1).reduce((a,c)=> a+Number(c), 0)
};
