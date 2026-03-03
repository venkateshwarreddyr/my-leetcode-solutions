// Problem: Zigzag Conversion
// LeetCode: https://leetcode.com/problems/zigzag-conversion/
// Language: javascript
// Runtime: 73 ms
// Memory: 47 MB
// Submitted: 2023-08-15

cl = console.log
var convert = function (s, numRows) {
    let ns = ''
    if (numRows === 1) return s
    for (let i = 0; i < numRows; i++) {
        let c = (numRows - i - 1) * 2
        let d = (i) * 2
        let j = i
        let condition = (e) => {
            if (i === 0) return c
            if (i === numRows - 1) return d
            if (i < i / 2) {
                if (e)
                    return c
                else
                    return d
            }
            else {
                if (e % 2)
                    return d
                else
                    return c
            }
        }
        let e = false
        while (j < s.length) {
            ns += s[j]
            j += (condition(e))

            e = !e
        }
    }

    return ns
};
