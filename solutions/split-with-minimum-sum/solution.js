// Problem: Split With Minimum Sum
// LeetCode: https://leetcode.com/problems/split-with-minimum-sum/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.2 MB
// Submitted: 2023-03-04

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let nums=num.toString().split("").sort((a,b) => a-b);
    let num1 = 0;
    let num2 = 0;
    
    for(let i=0;i<nums.length;i++){
        if(i%2===0){
            num1+=nums[i]
        }
        else {
            num2+=nums[i]
        }
        
    }
    console.log({nums});
    
    return Number(num1)+Number(num2)
};
