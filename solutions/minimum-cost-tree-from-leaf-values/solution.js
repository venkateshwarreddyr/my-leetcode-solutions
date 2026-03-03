// Problem: Minimum Cost Tree From Leaf Values
// LeetCode: https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.9 MB
// Submitted: 2025-11-17

var mctFromLeafValues = function (arr) {
    let stack = [Infinity]

    let total = 0

    for (let e of arr) {
        while (stack.at(-1) <= e) {
            const mid = stack.pop()
            total += mid * Math.min(stack[stack.length - 1], e);
        }

        stack.push(e)

    }

    while (stack.length > 2) {
        total += stack.pop() * stack.at(-1)

    }

    return total
};
