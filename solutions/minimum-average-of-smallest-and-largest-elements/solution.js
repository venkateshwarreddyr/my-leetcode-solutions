// Problem: Minimum Average of Smallest and Largest Elements
// LeetCode: https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/
// Language: javascript
// Runtime: 63 ms
// Memory: 51.8 MB
// Submitted: 2024-06-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b)
    let leastAvg = Infinity
    while(nums.length) {
        let x = (nums.pop() + nums.shift()) / 2
        leastAvg = Math.min(leastAvg, x)
    }
    
    return leastAvg
};
