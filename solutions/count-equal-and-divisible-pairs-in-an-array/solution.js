// Problem: Count Equal and Divisible Pairs in an Array
// LeetCode: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
// Language: javascript
// Runtime: 63 ms
// Memory: 42 MB
// Submitted: 2023-05-10

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let n = nums.length;
    let counter = 0;

    for(let i=0;i<n; i++){
        for(let j=i+1;j<n;j++){
            if(nums[i] === nums[j] && (i*j)%k===0){    
                counter++;
            }
        }
    }
    
    return counter;
};
