// Problem: Basic Calculator
// LeetCode: https://leetcode.com/problems/basic-calculator/
// Language: javascript
// Runtime: 104 ms
// Memory: 53.8 MB
// Submitted: 2023-10-04

cl = console.log
const isDigit = (ch) => {
    return ch >= "0" && ch <= "9";
};
var Stack = function () {
    let a = [];
    this.top = () => a[a.length - 1];
    this.size = () => a.length;
    this.empty = () => !a.length;
    this.push = (e) => a.push(e);
    this.pop = () => a.pop();
    this.cl = () => console.log(a);
};

let stack = new Stack();
var calculate = function (s) {
    s = '(' + s + ')'
    let stack = new Stack()

    function calc(s) {
        s = s.replaceAll("--", "+")
        s = s.replaceAll("-+", "-")
        s = s.replaceAll("+-", "-")
        s = s.replaceAll("++", "+")

        let sum = 0
        for (let i = 0; i < s.length; i++) {
            let c = s[i]
            let initi = i
            if (isDigit(c)) {
                while (isDigit(s[i + 1])) {
                    c += s[i + 1]
                    i++
                }
                if (s[initi - 1] === undefined) {
                    sum += +c
                } else if (s[initi - 1] === "-") {
                    sum -= +c
                } else if (s[initi - 1] === "+") {
                    sum += +c
                }
            }
        }

        return sum
    }

    for (let c of s) {
        if (c === " ") continue
        if (c === ")") {
            let x = ""
            while (stack.top() !== "(") {
                x = stack.pop() + x
            }
            stack.pop()
            stack.push(calc(x))
        } else {
            stack.push(c)
        }
    }

    return stack.pop()
};
