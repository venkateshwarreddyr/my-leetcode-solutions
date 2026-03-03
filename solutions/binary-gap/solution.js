// Problem: Binary Gap
// LeetCode: https://leetcode.com/problems/binary-gap/
// Language: javascript
// Runtime: 45 ms
// Memory: 41.9 MB
// Submitted: 2023-05-26

cl = console.log
var binaryGap = function (n) {
    let a = n.toString(2)
    let an = [0]
    let j = 0
    for (let i = 0; i < a.length;) {
        if (a[i] === '1') {
            j = i + 1
            while (a[j] === '0') {
                j++
            }
            if (j < a.length) {
                an.push(j - i)
            }
            i = j
        }
    }
    return Math.max(...an)
};
