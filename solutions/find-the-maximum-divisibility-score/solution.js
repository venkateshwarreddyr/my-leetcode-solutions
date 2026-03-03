// Problem: Find the Maximum Divisibility Score
// LeetCode: https://leetcode.com/problems/find-the-maximum-divisibility-score/
// Language: javascript
// Runtime: 422 ms
// Memory: 49 MB
// Submitted: 2023-04-16

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    divisors = [...new Set(divisors)].sort((a,b) => a-b);
    
    let maxCount = -1;
    let ans = -1;
    for(let i=0;i<divisors.length;i++){
        let count = 0;
        for(let j=0;j<nums.length;j++){
            if(nums[j]%divisors[i] === 0){
                count++
            }
        }
    // console.log({count})
        if(count > maxCount){
            maxCount = count;
            ans = divisors[i]
        }
    }
    
    return ans;
};
