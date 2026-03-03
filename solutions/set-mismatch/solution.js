// Problem: Set Mismatch
// LeetCode: https://leetcode.com/problems/set-mismatch/
// Language: javascript
// Runtime: 376 ms
// Memory: 45.7 MB
// Submitted: 2022-05-07

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    let ans = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            ans.push(nums[i]);
            break;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i+1 && !nums.includes(i+1)){
            ans.push(i+1);
            break;
        }
    }
    return ans;
};
