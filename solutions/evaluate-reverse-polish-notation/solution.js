// Problem: Evaluate Reverse Polish Notation
// LeetCode: https://leetcode.com/problems/evaluate-reverse-polish-notation/
// Language: javascript
// Runtime: 28 ms
// Memory: 62.7 MB
// Submitted: 2025-12-30

var evalRPN = function (s) {
    let stack = []
    for (let ch of s) {
        switch (ch) {
            case "+":
            case "-":
            case "*":
            case "/":
                const b = stack.pop();                  // NOTE: b before a
                const a = stack.pop();
                let res = eval("" + a + ch + " " + b);  // NOTE: space after ch
                if (ch === "/") {
                    res = Math.trunc(res);                // Only if division
                }
                stack.push(res);                        // push the result
                break;
            default:
                stack.push(+ch);
                break;
        }
    }
    return stack.pop();                           // last remaining element
};

