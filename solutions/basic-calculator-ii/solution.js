// Problem: Basic Calculator II
// LeetCode: https://leetcode.com/problems/basic-calculator-ii/
// Language: javascript
// Runtime: 36 ms
// Memory: 67.5 MB
// Submitted: 2026-01-17

var calculate = function (s) {
    let n = s.length;
    let prevNum = 0;
    let prevOperator;
    let stack = [];

    for (let i = 0; i < n; i++) {
        let currChar = s[i];

        let isCurrCharNumber = /[0-9]/.test(currChar);
        if (isCurrCharNumber) prevNum = prevNum * 10 + +currChar;

        let isCurrCharOperator = /[+\-*/]/.test(currChar);
        if (isCurrCharOperator || i === n - 1) {
            const currCharOperator = currChar;
            const currNum = prevNum

            switch (prevOperator) {
                case undefined:
                case '+':
                    stack.push(+currNum);
                    break;
                case '-':
                    stack.push(-currNum);
                    break;
                case '*': {
                    stack.push(stack.pop() * currNum);
                    break;
                }
                case '/': {
                    stack.push(Math.trunc(stack.pop() / currNum));
                    break;
                }
                default:
                    break;
            }

            prevOperator = currCharOperator;
            prevNum = 0;
        }
    }

    return stack.reduce((s, x) => s + x, 0);
};

