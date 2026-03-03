// Problem: Count Special Quadruplets
// LeetCode: https://leetcode.com/problems/count-special-quadruplets/
// Language: javascript
// Runtime: 155 ms
// Memory: 40 MB
// Submitted: 2021-09-05

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    // nums = nums.sort((a,b) => a-b);
    let count =0;
    // console.log({nums})
    let arr = [...nums].slice(0, 4);
    for(let i =0; i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k =j+1; k<nums.length;k++){
                for(let l=k+1;l<nums.length;l++){
                    arr[0] = nums[i]
                    arr[1] = nums[j]
                    arr[2] = nums[k]
                    arr[3] = nums[l]
                    if(nums[i]+nums[j]+nums[k] === nums[l]){
                        // console.log(arr)
                        count++}
                }
            }
        }
    }
    return count;
};
