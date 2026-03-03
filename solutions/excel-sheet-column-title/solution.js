// Problem: Excel Sheet Column Title
// LeetCode: https://leetcode.com/problems/excel-sheet-column-title/
// Language: javascript
// Runtime: 57 ms
// Memory: 41.8 MB
// Submitted: 2023-05-28

cl = console.log
var convertToTitle = function (c) {
    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    let an = ''
    while (c > 0) {
        c--
        let x = Math.floor((c) / 26)
        let y = c % 26
        an = a[(y) % 26] + an
        c = x
    }

    return an;
};
