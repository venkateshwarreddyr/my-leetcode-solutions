// Problem: Maximum Nesting Depth of Two Valid Parentheses Strings
// LeetCode: https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/
// Language: javascript
// Runtime: 58 ms
// Memory: 44.1 MB
// Submitted: 2023-06-30

/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (s) {

    let n = s.length
    let flip = 0
    let stack = []
    let an = new Array(n)
    for (let i = 0; i < n; i++) {
        let e = s[i]
        if (e === "(") {
            stack.push(i)
            flip = flip ? 0 : 1
        } else {
            let j = stack.pop()
            an[i] = flip
            an[j] = flip
            flip = flip ? 0 : 1
        }
    }

    return an;
};
