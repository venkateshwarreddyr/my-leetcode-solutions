// Problem: Parsing A Boolean Expression
// LeetCode: https://leetcode.com/problems/parsing-a-boolean-expression/
// Language: javascript
// Runtime: 81 ms
// Memory: 48.9 MB
// Submitted: 2023-07-03

cl = console.log

var Stack = function () {
    let a = [];
    Stack.prototype.top = () => a[a.length - 1];
    Stack.prototype.size = () => a.length;
    Stack.prototype.empty = () => !a.length;
    Stack.prototype.push = (e) => a.push(e)
    Stack.prototype.pop = () => a.pop()
}

var parseBoolExpr = function (expression) {
    let stack = new Stack();
    let f = "f"
    let t = "t"
    for (let e of expression) {
        if (e === ")") {
            let arr = []
            while (stack.top() !== "(") {
                let x = stack.pop()
                if (x === ",") continue
                arr.push(x)
            }
            stack.pop()
            let op = stack.pop();
            if (op === "&") {
                an = t
                for (let v of arr) {
                    if (v === f) {
                        an = f
                        break;
                    }
                }
                stack.push(an)
            }
            if (op === "|") {
                an = f
                for (let v of arr) {
                    if (v === t) {
                        an = t
                        break;
                    }
                }
                stack.push(an)
            }
            if (op === "!") {
                an = t === arr[0] ? f : t
                stack.push(an)
            }
        } else {
            stack.push(e)
        }
    }

    cl(stack)

    return stack.top() === t;

};
