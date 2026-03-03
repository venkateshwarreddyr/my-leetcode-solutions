// Problem: Smallest Index With Digit Sum Equal to Index
// LeetCode: https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.2 MB
// Submitted: 2025-06-14

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    
    let i = 0
    for(let num of nums) {

        let c = 0
        while(num) {
            c+=(num%10)

            num = Math.floor(num / 10)

        }

        if(i===c) return i

        i++
    }

    return -1
};
