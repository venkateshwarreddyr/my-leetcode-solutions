// Problem: Find the Maximum Number of Marked Indices
// LeetCode: https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/
// Language: javascript
// Runtime: 203 ms
// Memory: 54.7 MB
// Submitted: 2023-02-26

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
    let n=nums.length;
    nums = nums.sort((a,b) => b-a);
    let count = 0;
    
    let left = 0;
    let right = n%2 === 0 ? Math.floor(n/2) : Math.floor(n/2)+1;
    console.log(n/2)
    while(right<n){
        if(2*nums[right] <= nums[left]){
            count++;
            left++;  
        }
        right++;
    }
    
    return count*2;
};
