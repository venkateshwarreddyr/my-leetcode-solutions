// Problem: Minimum Operations to Convert All Elements to Zero
// LeetCode: https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/
// Language: javascript
// Runtime: 18 ms
// Memory: 76.9 MB
// Submitted: 2025-11-10

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let stack = []
    let ans = 0
    for (let e of nums) {
        while (stack.length && stack.at(-1) > e) {
            stack.pop()
        }

        if(e === 0) continue
        if (!stack.length || stack.at(-1) < e) {
            ans++
            stack.push(e)
        }
    }

    return ans
};
