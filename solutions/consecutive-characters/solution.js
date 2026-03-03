// Problem: Consecutive Characters
// LeetCode: https://leetcode.com/problems/consecutive-characters/
// Language: javascript
// Runtime: 72 ms
// Memory: 40.1 MB
// Submitted: 2021-08-07

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(nums) {
        max = 0;
    counter = 1;
    for(let i=1; i< nums.length;i++){
        if(nums[i]===nums[i-1]){
            counter++;
        }else{
            if(counter>max){
                max = counter;
            }
            counter = 1;
        }
    }
    if(counter>max){
                max = counter;
            }
    return max;
};
