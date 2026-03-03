// Problem: Max Chunks To Make Sorted
// LeetCode: https://leetcode.com/problems/max-chunks-to-make-sorted/
// Language: javascript
// Runtime: 0 ms
// Memory: 54 MB
// Submitted: 2025-11-10

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (a) {
    let stack = []
    let ans = 0
    for (let e of a) {
        if (!stack.length || stack.at(-1) < e) {
            ans++
            stack.push(e)
        } else {
            let max = stack.at(-1)
            while (stack.length && stack.at(-1) > e) {
                stack.pop()
            }
            stack.push(max)
        }
    }

    return stack.length

};
