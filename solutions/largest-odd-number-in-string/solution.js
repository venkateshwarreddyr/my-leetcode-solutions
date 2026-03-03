// Problem: Largest Odd Number in String
// LeetCode: https://leetcode.com/problems/largest-odd-number-in-string/
// Language: javascript
// Runtime: 184 ms
// Memory: 55.1 MB
// Submitted: 2021-06-20

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let nums = num.split('');
    for(let i = nums.length-1; i!=-1; i--){
        if(nums[i]%2===0){
            nums[i] = '';
        }else{
            break;
        }
    }
    return nums.join('');
};
