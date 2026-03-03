// Problem: Number of Steps to Reduce a Number to Zero
// LeetCode: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// Language: javascript
// Runtime: 68 ms
// Memory: 38.8 MB
// Submitted: 2021-05-29

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    counter = 0;
    while(num!=0){
        counter++;
        num = num%2? num-1:num/2;
    }
    return counter;
};
