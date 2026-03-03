// Problem: Sort Array By Parity
// LeetCode: https://leetcode.com/problems/sort-array-by-parity/
// Language: javascript
// Runtime: 65 ms
// Memory: 44.3 MB
// Submitted: 2023-09-28

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr1 = [];
    let arr2= [];
    for(let num of nums){
        if(num%2===0) arr1.push(num)
        else arr2.push(num)
                      
    }
                      return arr1.concat(arr2)
};
var sortArrayByParity1 = function(nums) {
    let i=0
    let j=0
    while(j<nums.length){
        if(nums[i]%2===1)
        {
            nums.push(nums.splice(i,1))
       
        }else{
        
        i++
                
        }
        j++
    }
    return nums
};
