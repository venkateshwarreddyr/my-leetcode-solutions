// Problem: Find the Maximum Length of Valid Subsequence I
// LeetCode: https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/
// Language: javascript
// Runtime: 137 ms
// Memory: 74.4 MB
// Submitted: 2024-06-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    nums = nums.map(e => e%2)
    let count1 = nums.reduce((a, c) => a + c, 0)
    let count0 = nums.reduce((a, c) => a + (c === 0 ? 1 : 0), 0)
    let count01 = 0
    let curr = 0
    for(let e of nums) {
        if(e === curr) {
            count01++
            curr = curr ? 0 : 1
        }
    }
        let count10 = 0
     curr = 1
    for(let e of nums) {
        if(e === curr) {
            count10++
            curr = curr ? 0 : 1
        }
    }
    
    return Math.max(count1, count0, count01, count10)
};

