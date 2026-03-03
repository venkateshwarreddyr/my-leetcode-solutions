// Problem: Clumsy Factorial
// LeetCode: https://leetcode.com/problems/clumsy-factorial/
// Language: javascript
// Runtime: 58 ms
// Memory: 44.2 MB
// Submitted: 2023-10-17

cl = console.log
/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
    let an = 0
    let curr = n
    let op = ['*', '/', "+", "-"]

    let j = 0
    let stack = [n];

    for (let i = n - 1; i > 0; i--) {
        switch (op[j%4]) {
            case "*": {
                stack.push(stack.pop() * i)
                break
            }
            case "/": {
                stack.push(Math.trunc(stack.pop() / i))
                break
            }
            case "+": {
                stack.push(i)
                break
            }
            case "-": {
                stack.push(-i)
                break
            }
            default: {
                break
            }
        }

        j++
    }

    return stack.reduce((a, c) => a + c, 0)
};
