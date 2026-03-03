// Problem: Points That Intersect With Cars
// LeetCode: https://leetcode.com/problems/points-that-intersect-with-cars/
// Language: javascript
// Runtime: 59 ms
// Memory: 44.2 MB
// Submitted: 2023-09-10

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let n = nums.length
    let a = new Array(101).fill(0)
    
    for(let [st, ed] of nums){
        for(let i = st;i<=ed;i++){
            a[i]++
        }
    }
    
    return a.reduce((a, c) => a + (c ? 1 : 0), 0)
};
