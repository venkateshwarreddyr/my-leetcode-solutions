// Problem: Defuse the Bomb
// LeetCode: https://leetcode.com/problems/defuse-the-bomb/
// Language: javascript
// Runtime: 75 ms
// Memory: 42.4 MB
// Submitted: 2023-05-23

cl = console.log
var decrypt = function (code, k) {
    let n = code.length;
    let an = [];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        if (k > 0) {
            for (let j = i + 1; j <= i + k; j++) {
                sum += (code[j % n])
            }
        } else if (k < 0) {
            for (let j = i - 1; j >= i + k; j--) {
                sum += (code[(n + j) % n])
            }
        }

        an.push(sum)
    }

    return an;
};
