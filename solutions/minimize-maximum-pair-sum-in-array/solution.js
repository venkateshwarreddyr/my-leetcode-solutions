// Problem: Minimize Maximum Pair Sum in Array
// LeetCode: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
// Language: javascript
// Runtime: 291 ms
// Memory: 58 MB
// Submitted: 2023-11-17

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let maxx = 0;
    nums.sort((a,b) => a-b);
    let len = nums.length;
    console.log(nums)
    for(let i=0;i<len/2;i++){
        let summ = nums[i] + nums[len-i-1];
        if(summ>maxx){
            maxx = summ;
        }
    }
    return maxx;
};
