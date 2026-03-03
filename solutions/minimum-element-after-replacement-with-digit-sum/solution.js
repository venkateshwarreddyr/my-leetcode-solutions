// Problem: Minimum Element After Replacement With Digit Sum
// LeetCode: https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.2 MB
// Submitted: 2025-06-14

/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Infinity
    for(let num of nums) {
        let c = 0

        while(num) {
            c+=(num%10)

            num = Math.floor(num / 10)

        }

        min = Math.min(min, c)

    }

    return min

};
