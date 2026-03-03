// Problem: Check if Number Has Equal Digit Count and Digit Value
// LeetCode: https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
// Language: javascript
// Runtime: 120 ms
// Memory: 42.5 MB
// Submitted: 2022-05-28

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(nums) {
    nums = nums.split('').map(e => Number(e));
    let bool = true;
    for(let i=0;i<nums.length;i++){
        bool = bool && nums[i] === nums.filter(e => e==i).length
    }
    return bool
};
