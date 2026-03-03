// Problem: Minimum Difference Between Highest and Lowest of K Scores
// LeetCode: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
// Language: javascript
// Runtime: 10 ms
// Memory: 56.6 MB
// Submitted: 2026-01-25

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b) => b-a);
    // if(k===1) return 0;
    // return nums[0]-nums[1];
    
    
    
    
    
    
    
    
    let max = Math.pow(10, 5);
    for(let i =0; i< nums.length;i++){
        // for(let j =i+k; j<nums.length;j++){
            let x = Math.abs(nums[i]-nums[i+k-1])
            // console.log({x}, nums[i],nums[j])
            if(x<max){
                max = x;
            } 
        // }
    }
    return max
};
