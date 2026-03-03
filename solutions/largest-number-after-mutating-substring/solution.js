// Problem: Largest Number After Mutating Substring
// LeetCode: https://leetcode.com/problems/largest-number-after-mutating-substring/
// Language: javascript
// Runtime: 231 ms
// Memory: 75.7 MB
// Submitted: 2021-07-25

/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function(nums, change) {
    nums = nums.split('').map(e => Number(e));
    let stopChange = false;
    for(let i =0; i< nums.length; i++){
        if(nums[i]<change[nums[i]]){
            nums[i] = change[nums[i]];
            stopChange = true;
        } else if (stopChange && nums[i]!=change[nums[i]]){
            break;
        }
    }
    return nums.join('')
};
