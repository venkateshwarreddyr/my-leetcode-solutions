// Problem: Maximum Value of an Ordered Triplet I
// LeetCode: https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/
// Language: javascript
// Runtime: 59 ms
// Memory: 42.4 MB
// Submitted: 2023-10-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let n = nums.length
    let max = 0
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                max = Math.max(max, (nums[i] - nums[j]) * nums[k])
            }
        }
    }
    
    return max
};
