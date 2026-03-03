// Problem: Find Common Characters
// LeetCode: https://leetcode.com/problems/find-common-characters/
// Language: javascript
// Runtime: 83 ms
// Memory: 57.9 MB
// Submitted: 2024-06-05

cl = console.log
var commonChars = function (words) {
    let n = words.length
    let arr = [...new Array(n)].map((_) => new Array(26).fill(0))
    let an = []

    let i = 0
    for (let word of words) {
        for (let c of word) {
            arr[i][c.charCodeAt() - 97]++
        }
        i++
    }
    for (let i = 0; i < 26; i++) {
        let min = Infinity
        for (let a of arr) {
            min = Math.min(min, a[i])
        }

        if (min) {
            for (let j = 0; j < min; j++) {
                an.push(String.fromCharCode(i + 97))
            }
        }
    }

    return an;
};
