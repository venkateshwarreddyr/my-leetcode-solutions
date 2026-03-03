// Problem: Prime In Diagonal
// LeetCode: https://leetcode.com/problems/prime-in-diagonal/
// Language: javascript
// Runtime: 176 ms
// Memory: 52.7 MB
// Submitted: 2023-06-05

/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    function isPrime(num){
        if(num<=1) return false;
        
        let count = 0;
        for(let i=1;i<=num/2;i++){
            if(num%i===0) count++
        }
        console.log({count, num})
        if(count === 1) return true
        return false;
    }
    
    let ans = 0;
    for(let i=0;i<nums.length;i++){
       for(let j=0;j<nums.length;j++){
           if(i===j || i+j===nums.length-1){
               if(nums[i][j]>ans && isPrime(nums[i][j])){
                 ans = nums[i][j]
               }
           }
       }
    }
    
    return ans;
};
