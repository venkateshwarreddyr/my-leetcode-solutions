// Problem: Minimum Operations to Make Binary Array Elements Equal to One I
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/
// Language: javascript
// Runtime: 155 ms
// Memory: 64.9 MB
// Submitted: 2024-06-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let counter = 0
    let n = nums.length
    for(let i = 0;i<=n-3;i++) {
        if(!nums[i]){counter++
                     
            for(let j = i; j<i+3; j++) {
                    nums[j] = !nums[j]
            }
}
    }
    console.log(nums)
    for(let e of nums) {
        if(!e) return -1
    }
    return counter
};
