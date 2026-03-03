// Problem: Divide Array Into Equal Pairs
// LeetCode: https://leetcode.com/problems/divide-array-into-equal-pairs/
// Language: javascript
// Runtime: 54 ms
// Memory: 44.9 MB
// Submitted: 2023-05-11

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let ob = {}
    
    for(let num of nums){
        if(ob[num]){
            delete ob[num]
        } else{
            ob[num] = 1
        }
    }
    
    return Object.keys(ob).length === 0
};
