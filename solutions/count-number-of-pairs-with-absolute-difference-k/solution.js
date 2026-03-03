// Problem: Count Number of Pairs With Absolute Difference K
// LeetCode: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
// Language: javascript
// Runtime: 80 ms
// Memory: 40.3 MB
// Submitted: 2021-12-17

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let counter = 0;
    // for(let num1 of nums){
    //     for(let num2 of nums){
    //         if(Math.abs(num1-num2) === k && num1<num2) counter++;
    //     }
    // }
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j]) === k) counter++;
        }
    }
    return counter;
};
