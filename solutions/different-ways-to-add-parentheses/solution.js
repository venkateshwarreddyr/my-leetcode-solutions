// Problem: Different Ways to Add Parentheses
// LeetCode: https://leetcode.com/problems/different-ways-to-add-parentheses/
// Language: javascript
// Runtime: 67 ms
// Memory: 44.6 MB
// Submitted: 2023-07-10

cl = console.log
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (s) {
    let n = s.length
    let a = []
    let c = ""
    let ops = "*+-"
    for (let i = 0; i < n; i++) {
        if (ops.includes(s[i])) {
            a.push(+c)
            c = ""
            a.push(s[i])
        } else {
            c += s[i]
        }
    }
    a.push(+c)
    cl(a)
    let an = []
    let set = new Set()
    function fn(a, j) {

        if (a.length === 1) {
            an.push(a[0])
            return;
        }

        for (let i = j; i < a.length; i++) {
            if (ops.indexOf(a[i]) > -1) {
                let val = null
                let v1 = a[i - 1]
                let v2 = a[i + 1]
                switch (a[i]) {
                    case "*": {
                        val = v1 * v2
                        break;
                    }
                    case "-": {
                        val = v1 - v2
                        break;
                    }
                    case "+": {
                        val = v1 + v2
                        break;
                    }
                }
                // s.slice(0, j + 1) + val + s.slice(k)
                let ts = [...a.slice(0, i - 1), val, ...a.slice(i + 2)]
                fn(ts, i-2)
            }
        }
    }

    fn(a, 0)
    return an;
};
