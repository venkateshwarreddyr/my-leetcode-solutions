// Problem: Decode String
// LeetCode: https://leetcode.com/problems/decode-string/
// Language: javascript
// Runtime: 49 ms
// Memory: 42 MB
// Submitted: 2023-07-02

cl = console.log
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    stack.top = () => stack[stack.length - 1];
    stack.size = () => stack.length;
    stack.empty = () => !stack.length;
    for (let c of s) {
        if (c === "]") {
            let s = ""
            while (stack.top() !== "[") {
                s = stack.pop() + s
            }
            stack.pop()

            let num = ""
            while (stack.top() >= '0' && stack.top() <= '9') {
                num = stack.pop() + num
            }

            stack.push(s.repeat(num))
        } else {
            stack.push(c)
        }
    }

    return stack.join("")
};
