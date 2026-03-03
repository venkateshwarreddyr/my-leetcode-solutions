// Problem: Average Value of Even Numbers That Are Divisible by Three
// LeetCode: https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
// Language: javascript
// Runtime: 134 ms
// Memory: 44.3 MB
// Submitted: 2022-10-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let counter = 0;
    nums.forEach((item) => {
        if(item%3 === 0 && item%2===0){
            counter++;
            sum+=item;
        }
    })
    
    if(counter === 0 || counter ===1) return sum;
    console.log({sum, counter}, sum/counter)
    return Math.floor(sum/counter)
};
