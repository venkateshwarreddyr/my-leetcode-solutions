// Problem: Single Number II
// LeetCode: https://leetcode.com/problems/single-number-ii/
// Language: javascript
// Runtime: 120 ms
// Memory: 42 MB
// Submitted: 2021-06-01

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let cobj = {};
    for(let num of nums){
        if(cobj[num]===undefined) cobj[num] = 0;
        cobj[num]++
    }
    for(let k of Object.keys(cobj)){
        if(cobj[k] === 1) return k;
    }
};
