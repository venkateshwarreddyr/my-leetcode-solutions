// Problem: Minimum Operations to Collect Elements
// LeetCode: https://leetcode.com/problems/minimum-operations-to-collect-elements/
// Language: javascript
// Runtime: 54 ms
// Memory: 43.2 MB
// Submitted: 2023-10-07

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let set = new Set()
    for(let i=1;i<=k;i++){
        set.add(i)
    }
    let n = nums.length
    let i = n - 1
    
    while(set.size && i>-1){
        set.delete(nums[i])
        i--
        
    }
    
    return n-i-1
    
};
