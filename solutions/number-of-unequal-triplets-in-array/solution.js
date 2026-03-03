// Problem: Number of Unequal Triplets in Array
// LeetCode: https://leetcode.com/problems/number-of-unequal-triplets-in-array/
// Language: javascript
// Runtime: 65 ms
// Memory: 41.5 MB
// Submitted: 2023-05-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let n = nums.length;
    let an = 0;

    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                if(nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]){
                    an++
                }
            }
        }
    }

    return an;
};
