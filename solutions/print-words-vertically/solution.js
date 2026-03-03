// Problem: Print Words Vertically
// LeetCode: https://leetcode.com/problems/print-words-vertically/
// Language: javascript
// Runtime: 56 ms
// Memory: 42.1 MB
// Submitted: 2023-07-22

cl = console.log
/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
    s = s.split(" ")
    let max_word_length = s.reduce((a, c) => Math.max(a, c.length), 0)
    let grid = Array.from(
        { length: max_word_length },
        () => new Array(s.length).fill(" ")
    )

    for (let i = 0; i < s.length; i++) {
        let j = 0
        for (let c of s[i]) {
            grid[j][i] = c

            j++
        }
    }

    return grid.map(e => e.join("").trimEnd())
};
